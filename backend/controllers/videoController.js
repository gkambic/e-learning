import Video from '../models/Video.js';

const getVideos = async (req, res) => {
    try {
        const videos = await Video.getAll();
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getVideos,
};
