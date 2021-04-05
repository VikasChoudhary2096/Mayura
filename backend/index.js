const express = require("express");

const helmet = require('helmet');

const authRoutes = require('./routes/auth');

const app = express();
 
//  parsing the request body
app.use(express.json());

// it helps in securing apps by setting various HTTP headers(against Cross-Site-Scripting(XSS), clickjacking, etc)
app.use(helmet());

// serving static frontend files
app.use(express.static('public'));

// allowing CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/auth', authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})
