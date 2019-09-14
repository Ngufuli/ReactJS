const express = require('express');

const app = express();
app.use(express.static('static'));

const port = process.env.PORT || 4321; 
app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`);
});