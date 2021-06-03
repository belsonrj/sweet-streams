import React, { useState } from 'react';
import ShowCard from "../Shows/showCard";

export default function SearchShow() {

    const [query, setQuery] = useState('');
    const [show, setShow] = useState([]);

    const searchShow = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/tv?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US&query=${query}&page=1&include_adult=false`;
    
        try {
            const res = await fetch(url);
            const data = await res.json();
            setShow(data.results);
            
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <h1 className="title">Search TV</h1>
            <form className="form" onSubmit={searchShow}>
                <label className="label" htmlFor="query" />
                <input className="input" type="text" name="query"
                    placeholder="Search Movie Name" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="scrolling-wrapper">
                {show.filter(shw => shw.poster_path).map(shw => (
                    <ShowCard show={shw} key={shw.id} />
                ))}
            </div>
        </>
    )
}