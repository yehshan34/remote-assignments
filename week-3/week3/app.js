const express = require("express");

const app = express();
const port = 3000;

// Assignment 3: Connect to Backend API by AJAX
app.use(express.static('public'))
app.set("view engine", "pug");

// Assignment 1: Your First Web Server
app.get("/", (req, res) => { // http://localhost:3000/
    res.send("<h1>Hello, My Server!</h1>");
});

// Assignment 2: Build Backend API for Front-End
app.get("/getData", (req, res) => {
    let result;
    if (!req.query.number) { // http://localhost:3000/getData
        result = "Lack of Parameter";
    } else {
        if (isNaN(req.query.number)) { // http://localhost:3000/getData?number=xyz
            result = "Wrong Parameter";
        } else {
            let num = Number(req.query.number); // http://localhost:3000/getData?number=正整數
            result = ((num + 1) * num) / 2;
        }
    }
    res.send(`<h1>${result}</h1>`);
});

app.listen(3000, () => {
    console.log("The callback function is running!!!!!");
});