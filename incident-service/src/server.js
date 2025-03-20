import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("service incident is running");
    res.json({msg: "service incident is running"});
});

app.listen(3003, () =>  console.log("running at http://localhost:" + 3003));