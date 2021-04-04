const express = require("express");
const Joi = require("joi");
const helmet = require('helmet');
const app = express();
 
app.use(express.json());
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})
