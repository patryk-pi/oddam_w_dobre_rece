import express from "express";
import dotenv from "dotenv";

const port = 5005;

const app = express();

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
