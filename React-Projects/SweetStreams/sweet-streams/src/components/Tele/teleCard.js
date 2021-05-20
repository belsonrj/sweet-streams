import React from 'react';

export default function TeleCard({ tele }) {

    return (
        <div className="card">
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${tele.poster_path}`} 
                alt={tele.title + ' poster'}
                />
            <div className="card--content">
                <h3 className="card--title">{tele.title}</h3>
                <p><small>RELEASE DATE: {tele.release_date}</small></p>
                
                <p><small>USER RATING: {tele.vote_average}</small></p>
                <p className="card--desc">{tele.overview}</p>
            </div>
        </div>
    )
}