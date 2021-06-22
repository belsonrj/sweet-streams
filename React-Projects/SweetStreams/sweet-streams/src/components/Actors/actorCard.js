import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useStyles } from "../../styles/card.style";
import ActorShow from './actorShow';

export default function ActorCard({ actor }) {
    
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);

    return (
        <>
        {clicked ? <ActorShow actor={actor}/> :
        <Card
            className={classes.root}
            hoverable
            onClick={()=>setClicked(!clicked)}
            >
            <CardActionArea>
                <Typography gutterBottom variant="h6" component="h2">
                        {actor.name}
                </Typography>
                <CardMedia 
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${actor.profile_path}`}
                    alt={actor.name + ' poster'}
                    title={actor.name}
                />
                <CardContent>
                    <Typography className={classes.content}>
                        <small className="sub-title">Profession: </small>
                            {actor.known_for_department}<br />
                        <div>
                            <p className="sub-title">Known For:</p>
                                { (actor.known_for) ? 
                                    actor.known_for.map(act => (
                                    <p>{act.original_title}</p>
                                )) : "N/A"}
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        }
       </>

    )
}