import express from 'express';

const app = express();

// User routes
app.get("/users", (req,res) => {
    res.json("This is the GET user path");
})

app.post("/users", (req,res) => {
    res.json("This is the POST user path and something was added")
})

app.put("/users", (req,res) => {
    res.json("This is the PUT user path and something was updated completely")
})

app.patch("/users", (req,res) => {
    res.json("This is the PATCH user path and something was updated partially")
})

app.delete("/users", (req,res) => {
    res.json("This is the DELETE user path and something was removed")
})

// Products
app.get("products", (req,res) => {
    res.json("This is the GET products path")
})

app.post("/products", (req,res) => {
    res.json("This is the POST products path and something was added")
})

app.put("/products", (req,res) => {
    res.json("This is the PUT products path and something was updated completely")
})

app.patch("/products", (req,res) => {
    res.json("This is the PATCH products path and something was updated partially")
})

app.delete("/products", (req,res) => {
    res.json("This is the DELETE products path and something was removed")
})

app.listen(4040, () => {
    console.log('http://localhost:4040');
})