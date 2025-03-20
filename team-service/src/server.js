import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import teamRouter from "./routes/teamRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("service team is running");
  res.json({ msg: "service team is running" });
});

app.use("/api/teams", teamRouter);

connectDB();

app.listen(3002, () => console.log("running at http://localhost:" + 3002));
