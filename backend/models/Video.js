import { pool } from '../config/db.js';

const Video = {
    getAll: async () => {
        const [rows] = await pool.query('SELECT * FROM tbl_videos');
        return rows;
    },
    // Otros métodos como crear, actualizar, eliminar videos
};

export default Video;
