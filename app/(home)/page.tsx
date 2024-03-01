import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"

export const metadata: Metadata = {
    title: "Home"
}
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(API_URL);
    const movies = await response.json();
    return movies;
}
export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
            )
            )}
        </div>
    )
}