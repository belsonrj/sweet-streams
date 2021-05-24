import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "../../styles/card.style";
import ShowShow from "./showShow";
import { genreSwitch } from "../Genres/genreId.info";

export default function ShowCard({ show }) {
    
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);

    return (
        <>
        {clicked ? <ShowShow show={show}/> :
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
                        <small className="sub-title">First Air: </small>
                        {show.first_air_date}
                        <br/>
                        <small className="sub-title">User Rating: </small>
                        {show.vote_average}
                        <br/>
                        <small className="sub-title">Genre: </small>
                        {show.genre_ids.map(g => (
                            genreSwitch(g)
                        ))}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        }
        </>
    )
}
