import React, { useState } from 'react';
import TeleCard from "../Tele/teleCard";

export default function SearchTele() {

    const [query, setQuery] = useState('');
    const [tele, setTele] = useState([]);

    const searchTele = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setTele(data.results);
            //console.log(data.results)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <h1 className="title">Search TV</h1>
            <form className="form" onSubmit={searchTele}>
                <label className="label" htmlFor="query" />
                <input className="input" type="text" name="query"
                    placeholder="Search Movie Name" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {tele.filter(tele => tele.poster_path).map(tele => (
                    <TeleCard tele={tele} key={tele.id} />
                ))}
            </div>
        </>
    )
}