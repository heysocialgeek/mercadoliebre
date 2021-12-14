const express = require("express");
const app = express();
const path = require("path");

const staticFiles = express.static(path.join(__dirname, "public"));
app.use(staticFiles);

app.listen(process.env.PORT || 3000, () => { console.log("Servidor corriendo en el puerto 3000")
});

app.get("/", (req,res) => {
    let htmlPath = path.join(__dirname, "views/home.html")
    res.sendFile(htmlPath)
})

app.get("/login", (req,res) => {
    let htmlPath = path.join(__dirname, "views/login.html")
    res.sendFile(htmlPath)
})

app.get("/register", (req,res) => {
    let htmlPath = path.join(__dirname, "views/register.html")
    res.sendFile(htmlPath)
})