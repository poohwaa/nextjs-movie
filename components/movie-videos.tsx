import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideo(id: string) {
    // console.log(`Fetchdata video: ${Date.now()}`);
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error('Error');
    const response = await fetch(`${API_URL}/${id}/videos`);
    const json = await response.json();
    return json;
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideo(id);
    return (
        <div className={styles.container}>
            {
                videos.map((video) =>
                    <iframe
                        key={video.id}
                        title={video.name}
                        src={`https://youtube.com/embed/${video.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />)
            }

        </div>
    )
}