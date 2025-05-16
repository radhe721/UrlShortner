import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from "dotenv";
import filecabinet from "./src/config/mongo.config.js";
dotenv.config("./.env");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", (req, res) => {
    const { url } = req.body;
    console.log("URL:", url);
    res.send(nanoid(7));
});

app.listen(3000, () => {
    filecabinet();
    console.log("Server is running on http://localhost:3000");
});
