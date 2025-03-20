import "dotenv/config";
import express from "express";

import callerRoutes from "./routes/caller.routes.js";
import operatorRoutes from "./routes/operator.routes.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.use(express.json());
// app.get("/", (req, res) => {
//     console.log("service caller-operator is running");
//     res.json({msg: "service caller-operator is running"});
// });

app.use("/api/callers", callerRoutes);
app.use("/api/operators", operatorRoutes);

connectDB();

app.listen(PORT, () => console.log("running at http://localhost:" + PORT));
