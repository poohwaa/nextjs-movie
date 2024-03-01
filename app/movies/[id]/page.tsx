import { API_URL } from "../../(home)/page";

const getMovie = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}}`);
    const json = await response.json();
    return json;
}

const getVideo = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}/videos}`);
    const json = await response.json();
    return json;
}
export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
    const movie = await getMovie(id);
    const video = await getVideo(id);

    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    )
}