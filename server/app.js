import express from 'express';
import multer from 'multer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"]
}))

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

const PORT = 8000;

// Ensure the upload directory exists
const UPLOAD_DIR = path.join(__dirname, 'uploads');
fs.ensureDirSync(UPLOAD_DIR);

// Configure multer for chunk uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const chunkDir = path.join(UPLOAD_DIR, req.body.resumableIdentifier);
        fs.ensureDirSync(chunkDir);
        cb(null, chunkDir);
    },
    filename: (req, file, cb) => {
        cb(null, req.body.resumableFilename + '.' + req.body.resumableChunkNumber);
    }
});

const upload = multer({ storage: storage });

app.get("/test", (req, res) => {
    res.json({ "message": "Success" });
})

app.post('/video-upload', upload.single('file'), (req, res) => {
    const { resumableTotalChunks, resumableIdentifier, resumableFilename } = req.body;

    // Check if all chunks are uploaded
    const chunkDir = path.join(UPLOAD_DIR, resumableIdentifier);
    fs.readdir(chunkDir, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading chunk directory');
        }

        if (files.length === parseInt(resumableTotalChunks, 10)) {
            // Combine chunks
            const filePath = path.join(UPLOAD_DIR, resumableFilename);
            fs.ensureFileSync(filePath);

            for (let i = 1; i <= files.length; i++) {
                fs.appendFileSync(filePath, fs.readFileSync(path.join(chunkDir, resumableFilename + '.' + i)));
            }

            // Remove chunk files first
            files.forEach(file => {
                fs.unlinkSync(path.join(chunkDir, file));
            });

            // // Remove chunk directory
            try {
                fs.rmdirSync(chunkDir);
            } catch (err) {
                // return res.status(500).send('Error removing chunk directory');
            }
            const videoLink = `${req.protocol}://${req.get('host')}/uploads/${resumableFilename}`;
            res.json({ link: videoLink });
        } else {
            res.json({ message: "Chunk upload successfully!" });
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
