import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MovieShow from "./movieShow";

const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        color: "white",
        maxWidth: 250,
        minWidth: 200,
        height: 420,
        margin: 10,
        padding: 5,
    },
    media: {
        flex: 1,
        height: 250,
    },
    content: {
        color: "white",
        alignContent: "left",
    },
  });

export default function MovieCard({ movie }) {
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Card
            className={classes.root}
            hoverable
            onPress={handleExpandClick}
            >
            <CardActionArea>
                <Typography gutterBottom variant="h5" component="h2">
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
                        <p>
                            Released: {movie.release_date}
                            <br/>
                            User Rating: {movie.vote_average}
                        </p>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

export default function MovieCard({ movie }) {

    return (
        <div className="card">
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                alt={movie.title + ' poster'}
                />
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                
                <p><small>USER RATING: {movie.vote_average}</small></p>
                <p className="card--desc">{movie.overview}</p>
            </div>
        </div>
    )
}