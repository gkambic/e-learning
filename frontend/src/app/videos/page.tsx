"use client"; 
import VideoCard from './VideoCard';
import { mockVideos } from '../../services/videoMock';

export default function VideosPage() {
  return (
    <main style={{ display: 'flex', flexWrap: 'wrap', gap: '1em', justifyContent: 'center' }}>
      {mockVideos.map((video) => (
        <VideoCard key={video.id} id={video.id} title={video.title} description={video.description} url={video.url} />
      ))}
    </main>
  );
}
