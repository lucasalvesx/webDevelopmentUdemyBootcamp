//creating a local server:
//done after installing npm package and initialized npm


import express from "express";
const app = express();
const port = 3000;

//making server handle GET requests 
app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("Got!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});