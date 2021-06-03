import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "../../styles/card.style";
import ActorCard from './actorCard';
import { addCredits } from '../../services/Actors/actors.service';
import { movieDetails } from '../../services/Movies/movies.service';

export default function ActorShow({ actor }) {
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        if (actor.id) {
          addCredits(actor.id)      
          .then((data) => {
            setCredits(data.cast);
          })
        }
      }, [actor]);

    return (
        <>
        {clicked ? <ActorCard actor={actor}/> :
        <Card
            className={classes.root}
            hoverable
            onClick={()=>setClicked(!clicked)}
            >
            <CardActionArea>
                <Typography gutterBottom variant="h6" component="h2">
                        {actor.name}
                </Typography>
                <CardContent>
                    <Typography className={classes.content}>
                    <p className="sub-title">Credits:</p>
                            { (credits) ? 
                                credits.map(cred => (
                                <ul>
                                    <button onClick={() => movieDetails(cred.id)}><li>{cred.title} ({cred.release_date})</li></button>
                                </ul>
                            )) : "N/A"}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        }
        </>
    )
}
