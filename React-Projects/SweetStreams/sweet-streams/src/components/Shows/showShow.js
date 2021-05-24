import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "../../styles/card.style";
import ShowCard from './showCard';
import { addProviders } from '../../services/Shows/shows.service';

export default function ShowShow({ show }) {

    const classes = useStyles();
    const [clicked, setClicked] = useState(false);
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        if (show.id) {
          addProviders(show.id)      
          .then((data) => {
            console.log(data);
            setProviders(data.results.US);
          })
        }
      }, [show]);

    return (
        <>
        {clicked ? <ShowCard show={show}/> :
        <Card
            className={classes.root}
            variant="outlined"
            hoverable
            onClick={()=>setClicked(!clicked)}
            >
            <CardActionArea>
                <Typography gutterBottom variant="h6" component="h2">
                        {show.name}
                </Typography>
                <CardContent>
                    <Typography className={classes.content}>
                    <div>
                    <p className="sub-title">Overview:</p>
                        {show.overview}
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