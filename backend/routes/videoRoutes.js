import express from 'express';
import getAllVideos from '../controllers/videoController.js'; // Asegúrate de que esta ruta es correcta

const router = express.Router();

router.get('/', getAllVideos); // Aquí 'getAllVideos' es la función callback

export default router;
