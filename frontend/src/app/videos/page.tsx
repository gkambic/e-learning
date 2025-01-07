/* "use client"; 
import { useEffect, useState } from 'react';
import { mockCourses } from '../../services/coursesMock';
import VideoCard from './VideoCard';

interface Video {
    id: number;
    title: string;
    description: string;
    url: string;
    availableDate: string;
  }
  
  interface Course {
    id: number;
    title: string;
    description: string;
    frequency: number;
    videos: Video[];
    enrolledDate: Date;
  }

const VideosPage = () => {
    const [courseId, setCourseId] = useState<number | null>(null);
    const [availableVideos, setAvailableVideos] = useState<Video[]>([]);

  useEffect(() => {
    const storedId = localStorage.getItem('courseId'); // Recupera el ID de localStorage
    if (storedId) {
      setCourseId(parseInt(storedId, 10));
    } else {
      // Lógica en caso de que no haya ID almacenado
    }
  }, []);

  useEffect(() => {
    const course = mockCourses.find(c => c.id === courseId);
    if (course) {
      setAvailableVideos(calculateAvailableVideos(course));
    }
  }, [courseId]);
  
  if (!courseId) return <div>Cargando...</div>;


  const calculateAvailableVideos = (course: Course) => {
    const today = new Date();
    // Filtra los videos que están disponibles
    const unlockedVideos = course.videos.filter(video => {
      const videoAvailableDate = new Date(video.availableDate);
      return videoAvailableDate <= today;
    });

    return unlockedVideos;
  };

  return (
    <main style={{ display: 'flex', flexWrap: 'wrap', gap: '1em', justifyContent: 'center' }}>
      {availableVideos.map((video) => (
        <VideoCard key={video.id} id={video.id} title={video.title} description={video.description} url={video.url} />
      ))}
    </main>
  );
};

export default VideosPage;
 */