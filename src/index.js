const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./config/serverConfig');

const ApiRoutes = require('./routes/index');

const db = require('./models/index');
const city = require("./models/city");

const {Airplane} = require('./models/index');

const setupAndStartServer = async() =>{
    // create a exp obj
    const app = express();
    // const PORT = 3000
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT,async()=>{
        console.log(`Server Started at ${PORT}`);
        if(process.env.SYNC_DB) db.sequelize.sync({alter: true});
        

    });
}

setupAndStartServer();