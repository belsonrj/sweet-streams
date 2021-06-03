import React, { useEffect, useState } from "react";
import ShowCard from "../Shows/showCard";
import { addPopular } from "../../services//Shows/shows.service";

export default function PopularShow() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        addPopular()      
        .then((data) => {
          console.log(data);
          setShows(data.results);
        })
    }, [setShows])

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