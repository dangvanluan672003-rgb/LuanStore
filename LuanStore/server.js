const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Luân Store chạy tại http://localhost:" + PORT);
});
