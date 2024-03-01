import { API_URL } from "../../(home)/page";

const getMovie = async (id: string) => {
    console.log(`Fetchdata movie: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}}`);
    const json = await response.json();
    return json;
}

const getVideo = async (id: string) => {
    console.log(`Fetchdata video: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    const json = await response.json();
    return json;
}
export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
    console.log('start fetching');
    // const movie = await getMovie(id);
    // const video = await getVideo(id);
    const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
    console.log('end fetching');
    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    )
}