import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello express");
});


// this line must be last line 👇🏻
app.listen(4444, () => console.log("prg1 is running at 4444"));