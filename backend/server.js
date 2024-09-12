import express, { json } from 'express';
import cors from 'cors';
import videoRoutes from './routes/videoRoutes.js'; // Importar rutas usando la extensión

const app = express();

app.use(cors());
app.use(json());

// Aquí van las rutas
app.use('/api/videos', videoRoutes); // Usar directamente la importación de ES6

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
