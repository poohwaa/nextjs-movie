import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    }

}

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {

    return (
        <div>
            <Suspense fallback={<h3>Loading movie info</h3>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h3>Loading movie videos</h3>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}