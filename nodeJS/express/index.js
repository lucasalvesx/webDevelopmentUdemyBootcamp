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

//making server handle other endpoints (/---)
app.get("/contact", (req, res) => {
    res.send("<h1>Talk to us</h1> <br> 21 98777 5556")
})

app.get("/about", (req, res) => {
    res.send("<h1> About us </h1> <br> <p> Lorem ipsum dolor sit amet quasquen pasluis colonistus comutari</p>")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});