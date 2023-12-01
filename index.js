const express = require('express');
const app =express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config({path: './src/config/.env'});
const userRoutes = require('../back-new/src/routes/utilisateur.routes')
const typeUserRoutes = require('../back-new/src/routes/typeUtilisateur.routes') 

app.use(express.json());

var corsOptions = {
    "origin": process.env.CLIENT_URL,
    "optionsSuccessStatus": 200,
    "credentials": true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,',
    'preflightContinue': false 
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//gestion swagger 
app.use('/ecoia-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

//utilisateur
app.use('/api/user', /* verifyAuthToken,*/ userRoutes);

//type utilisateur
app.use('/api/type-user',/* verifyAuthToken,*/ typeUserRoutes);



//le port
app.listen(process.env.SERVEUR_PORT, () => 
    console.log(`Server started in port ${process.env.SERVEUR_PORT} && aller sur le swagger http://localhost:${process.env.SERVEUR_PORT}/ecoia-api-docs`
));