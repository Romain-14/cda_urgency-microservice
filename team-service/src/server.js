import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("service team is running");
    res.json({msg: "service team is running"});
});

app.listen(3002, () =>  console.log("running at http://localhost:" + 3002));