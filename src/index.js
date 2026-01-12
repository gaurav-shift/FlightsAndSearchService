const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async() =>{
    // create a exp obj
    const app = express();
    // const PORT = 3000
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,()=>{
        console.log(`Server Started at ${PORT}`);
    });
}

setupAndStartServer();