import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db";
import orgsRoutes from "./routes/orgsRoutes";

connectDB();

const port = 5005;

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Api is running");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.use("/api/orgs", orgsRoutes);