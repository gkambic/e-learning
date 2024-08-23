import { query } from '../config/db';

const Video = {
    getAll: async () => {
        const [rows] = await query('SELECT * FROM videos');
        return rows;
    },
    // Otros métodos como crear, actualizar, eliminar videos
};

export default Video;
