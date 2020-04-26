const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("Hello")
});

app.listen(300, (e) => {
    if (e) throw e;
    console.log('Server is running on 3000');
    
})