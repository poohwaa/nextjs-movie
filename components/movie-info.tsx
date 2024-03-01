import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
    console.log(`Fetchdata movie: ${Date.now()}`);
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    const response = await fetch(`${API_URL}/${id}}`);
    const json = await response.json();
    return json;
}

export default async function MovieInfo({ id }: { id: string }) {
    const movieInfo = await getMovie(id);
    return <h6>{JSON.stringify(movieInfo)}</h6>
}