import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "../../styles/card.style";
import MovieCard from './movieCard';
import { addProviders } from '../../services/Movies/movies.service';

export default function MovieShow({ movie }) {
    console.log(movie);
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        if (movie.id) {
          addProviders(movie.id)      
          .then((data) => {
            setProviders(data.results.US);
          })
        }
      }, [movie]);

    return (
        <>
        {clicked ? 
        <MovieCard movie={movie}/> 
        :
        <Card
            className={classes.root}
            hoverable
            onClick={()=>setClicked(!clicked)}
            >
            <CardActionArea>
                <Typography gutterBottom variant="h6" component="h2">
                        {movie.title}
                </Typography>
                <CardContent>
                    <Typography className={classes.content}>
                    <div>
                        <p className="sub-title">Overview:</p>
                            {movie.overview}
                    </div>
                    {(providers) ? 
                    <div>
                        <p className="sub-title">Stream:</p>
                            { (providers.flatrate) ? 
                                providers.flatrate.map(prov => (
                                <p>{prov.provider_name}</p>
                            )) : "N/A"}

                        <p className="sub-title">Buy:</p>
                            { (providers.buy) ? 
                                providers.buy.map(prov => (
                                <p>{prov.provider_name}</p>
                            )) : "N/A"}

                        <p className="sub-title">Rent:</p>
                            { (providers.rent) ? 
                                providers.rent.map(prov => (
                                <p>{prov.provider_name}</p>
                            )) : "N/A"}
                    </div> :
                    "No Availibility Info Provided" }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        }
        </>
    )
}
