"use client";

import { useEffect, useState } from "react"

export default function Hello() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async () => {
        const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
        const json = await response.json();
        setMovies(json);
        setLoading(false);
        // console.log(json);
    }

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <h1>{isLoading ? "loading..." : JSON.stringify(movies)}</h1>
        </div>
    )
}