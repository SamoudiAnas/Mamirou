const express = require("express");
const USERS = require("./data");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send(USERS);
});

app.listen(port, () => {
    console.log();
    console.log(`Example app listening on port ${port}`);
});
