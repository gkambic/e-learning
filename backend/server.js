import express, { json } from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

// Aquí van las rutas
app.use('/api/videos', require('./routes/videoRoutes').default);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
