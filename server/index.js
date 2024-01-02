// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from 'express-fileupload';
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";
import path from 'path';
import publicRoutes from "./routes/Public.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable set cookie
};

app.use(cors(corsOptions));




const __dirname = path.dirname(new URL(import.meta.url).pathname);

// const codeFolderPath = path.join(__dirname, '..', 'codeFolder');
// const videoFolderPath = path.join(__dirname, '..', 'videoFolder');

// app.use('/videoFolder', express.static(videoFolderPath));
// app.use('/codeFolder', express.static(codeFolderPath));

app.use('/audio', express.static(path.join(__dirname, 'audio')));
app.use('/video', express.static(path.join(__dirname, 'video')));
app.use('/photo', express.static(path.join(__dirname, 'photo')));

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(fileUpload());
// const photoPath1 = path.join(__dirname, 'photo');
// app.use('/photo', express.static(photoPath1));
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

// Make sure to use the correct path for the publicRoutes
app.use("/public", publicRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
