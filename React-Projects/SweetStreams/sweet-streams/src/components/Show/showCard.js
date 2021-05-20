import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "../../styles/card.style";
import ShowShow from "../Show/showShow";

export default function ShowCard({ show }) {
    
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);

    return (
        <>
        {clicked ? 
        <ShowShow show={show}/> 
        :
        <Card
            className={classes.root}
            hoverable
            onClick={()=>setClicked(!clicked)}
            >
            <CardActionArea>
                <Typography gutterBottom variant="h6" component="h2">
                        {show.name}
                </Typography>
                <CardMedia 
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${show.poster_path}`}
                    alt={show.name + ' poster'}
                    title={show.name}
                />
                <CardContent>
                    <Typography className={classes.content}>
                        First Air: {show.first_air_date}
                        <br/>
                        User Rating: {show.vote_average}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        }
        </>
    )
}
