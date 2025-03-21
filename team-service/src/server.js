import express from "express";
import { connectDB } from "../../incident-service/src/config/db.js";

const app = express();

app.get("/", (req, res) => {
    console.log("service team is running");
    res.json({msg: "service team is running"});
});

connectDB();
app.listen(3002, () =>  console.log("running at http://localhost:" + 3002));