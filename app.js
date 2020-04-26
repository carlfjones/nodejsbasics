const express = require("express");
const app = express();

app.listen(300, (e) => {
    if (e) throw e;
    console.log('Server is running on 3000');
    
})