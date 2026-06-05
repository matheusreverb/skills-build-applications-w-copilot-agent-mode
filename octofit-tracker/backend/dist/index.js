import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
const PORT = Number(process.env.PORT) || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit-tracker';
app.use(cors());
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', port: PORT, mongo: MONGODB_URI });
});
async function startServer() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB at', MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`Backend is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=index.js.map