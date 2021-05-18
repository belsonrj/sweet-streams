import React from "react";
import PopularMovie from "../components/Movies/popularMovie";

export default function Home() {
    return (
        <PopularMovie />
=======

export default function Home() {
    return (
        <>
            <h1 className="title">WELCOME TO SWEET STREAMS!</h1>
            <h1 className="title">Popular</h1>
        </>
    )
};