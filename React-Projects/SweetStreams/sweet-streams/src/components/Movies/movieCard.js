import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useStyles } from "../../styles/card.style";
import MovieShow from './movieShow';
import { genreSwitch } from "../Genres/genreId.info";

export default function MovieCard({ movie }) {
    
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);

    return (
        <>
        {clicked ? 
        <MovieShow movie={movie}/> 
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
                <CardMedia 
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + ' poster'}
                    title={movie.title}
                />
                <CardContent>
                    <Typography className={classes.content}>
                        <small className="sub-title">Released: </small>
                        {movie.release_date}<br />
                        <small className="sub-title">User Rating: </small>
                        {movie.vote_average}
                        <br/>
                        <small className="sub-title">Genre: </small>
                        {movie.genre_ids.map(g => (
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