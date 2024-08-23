import { getAll } from '../models/Video';

const getVideos = async (req, res) => {
    try {
        const videos = await getAll();
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getVideos,
};
