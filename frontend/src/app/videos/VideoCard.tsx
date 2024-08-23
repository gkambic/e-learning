/* export default function VideoCard({ title, description }: { title: string; description: string; }) {
    return (
      <div className="video-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  } */
  
/* import { useEffect, useState } from 'react';
import { getVideos } from '../services/videoService';

export default function VideosPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const videoList = await getVideos();
        setVideos(videoList);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <main>
      <h1>Available Videos</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
    </main>
  );
}
 */

"use client";

import { Card } from 'primereact/card';

interface VideoCardProps {
  id: number;
  title: string;
  description: string;
  url: string;
}

export default function VideoCard({ id, title, description, url }: VideoCardProps) {
  const header = (
    <iframe
      width="100%"
      height="200"
      src={url.replace('watch?v=', 'embed/')}
      frameBorder="0"
      allowFullScreen
      title={title}
    />
  );

  return (
    <Card title={title} subTitle={description} header={header} style={{ width: '25em', marginBottom: '2em' }}>
    </Card>
  );
}


