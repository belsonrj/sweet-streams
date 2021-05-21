import React, { useState, useEffect } from "react";
import { addGenres } from "../../services/Genres/genres.service";

export default function GenreContainer() {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        addGenres()
        .then((data) => {
            console.log(data);
            setGenres(data.genres);
        })
    }, [setGenres])

    return(
        <div>
            {genres.map(genre => (
                <p>{genre.name}</p>
            ))}
        </div>
    )
}