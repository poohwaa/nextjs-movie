import { API_URL } from "../app/(home)/page";

async function getVideo(id: string) {
    console.log(`Fetchdata video: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    throw new Error('Error');
    // const response = await fetch(`${API_URL}/${id}/videos`);
    // const json = await response.json();
    // return json;
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideo(id);
    return <h6>{JSON.stringify(videos)}</h6>
}