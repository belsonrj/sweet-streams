import React from "react";
import PopularMovie from "../components/Movies/popularMovie";
import PopularShow from "./Show/popularShow";

export default function Home() {
    return (
        <>
            <PopularMovie />
            <PopularShow />
        </>
    )
};