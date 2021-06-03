import React, { useState } from 'react';
import ActorCard from "../Actors/actorCard";

export default function SearchActors() {

    const [query, setQuery] = useState('');
    const [actors, setActors] = useState([]);

    const searchActors = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/person?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US&query=${query}&page=1&include_adult=false`;
      
        try {
            const res = await fetch(url);
            const data = await res.json();
            setActors(data.results);
            console.log(data.results)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
        <h1 className="title">Search Actors</h1>
        <form className="form" onSubmit={searchActors}>
            <label className="label" htmlFor="query" />
            <input className="input" type="text" name="query"
                placeholder="Search Actor Name" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="scrolling-wrapper">
            {actors.filter(actor => actor.profile_path).map(actor => (
                <ActorCard actor={actor} key={actor.id} />
            ))}
        </div>
        </>
    )
}