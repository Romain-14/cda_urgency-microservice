import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("service caller-operator is running");
    res.json({msg: "service caller-operator is running"});
});

app.listen(3001, () =>  console.log("running at http://localhost:" + 3001));