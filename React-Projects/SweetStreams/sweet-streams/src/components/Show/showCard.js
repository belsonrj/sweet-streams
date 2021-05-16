import React from 'react';

export default function ShowCard({ show }) {

    return (
        <div className="card">
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${show.poster_path}`} 
                alt={show.title + ' poster'}
                />
            <div className="card--content">
                <h3 className="card--title">{show.title}</h3>
                <p><small>RELEASE DATE: {show.release_date}</small></p>
                
                <p><small>USER RATING: {show.vote_average}</small></p>
                <p className="card--desc">{show.overview}</p>
            </div>
        </div>
    )
}