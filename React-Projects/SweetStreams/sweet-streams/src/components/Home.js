import React from "react";
import PopularMovie from "../components/Movies/popularMovie";
import PopularShow from "./Shows/popularShow";

export default function Home() {
    return (

        <>
            <PopularMovie />
            <PopularShow />
        </>
    )
};