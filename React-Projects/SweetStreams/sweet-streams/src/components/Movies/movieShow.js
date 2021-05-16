import React from "react";

export default function MovieShow({ movie }) {
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    )
}