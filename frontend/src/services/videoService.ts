import axios from 'axios';

// Define the base URL for your backend API
const API_BASE_URL = 'http://localhost:5000/api'; // Cambia esto a la URL de tu backend
/* export async function getVideos(): Promise<Array<{ id: string; title: string; }>> {
  // Replace this with your actual implementation
  const response = await fetch('https://api.example.com/videos');
  const data = await response.json();

  return data.map(item => ({ id: item.videoId, title: item.videoTitle }));
} */
export const getVideos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/videos`);
    //return response.data.map(item => ({ id: item.videoId, title: item.videoTitle }));; // Retorna los datos que obtuviste del backend
    return response.data.map((item: { videoId: string; videoTitle: string }) => ({ id: item.videoId, title: item.videoTitle }));
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

// Puedes agregar más funciones para manejar otras interacciones con los videos, como crear, actualizar, o eliminar videos
