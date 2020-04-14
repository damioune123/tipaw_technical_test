//vendor
const envPath = __dirname + "/.env."+process.env.NODE_ENV;
require('dotenv').config({path:envPath});
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./utils/logger');
const path = require('path');

//connect mongoose to the mongodb
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
}).catch((error) => {
    logger.error(`An error occurred while connecting to mongoDB :${error}`);
});
mongoose.connection.on('error', (err) => {
    logger.error(`A mongoDB connection error has occurred :${JSON.stringify(err)}`);
});


// Create a new instance of Express and socket io
const app = express();
const http = require('http').createServer(app);

//middlewares
app.use(cors());
app.use(bodyParser.json());

// Serve static html, js, css, and image files from the built frontend 'build'
app.use(express.static(path.normalize(path.join(__dirname,'../gui/build'))));

//add routes for REST API
app.use('/api', require('./routes'));

module.exports = app;

const port = process.env.PORT || 8080;
// Create a Node.js based http server on port 8080
http.listen(port,()=>{
    console.log('listening on *:'+port);
});



