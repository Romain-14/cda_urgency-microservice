import "dotenv/config"
import express from "express";
import { connectDB } from "./config/db.js";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    console.log("service incident is running");
    res.json({msg: "service incident is running"});
});

connectDB();


app.listen(3003, () =>  console.log("running at http://localhost:" + 3003));
