import React, { useEffect, useState } from "react";
import ShowCard from "../Show/showCard";

export default function PopularShow() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        addPopular();
    }, [setShows])

    const addPopular = async () => {

        const url = `https://api.themoviedb.org/3/tv/popular?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US&page=1`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setShows(data.results);
            //console.log(data.results)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <h2 className="title">Popular Shows</h2>
            <div className="container">
                <div className="scrolling-wrapper">
                    {shows.filter(show => show.poster_path).map(show => (
                    <ShowCard show={show} key={show.id} />
                    ))}
                </div>
            </div>
        </>
    )
}