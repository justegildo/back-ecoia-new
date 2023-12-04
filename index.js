const express = require('express');
const app =express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config({path: './src/config/.env'});
const userRoutes = require('./src/routes/utilisateur.routes')
const typeUserRoutes = require('./src/routes/typeUtilisateur.routes') 
const niveauRoutes = require('./src/routes/niveau.routes') 
const niveauUniversiteRoutes = require('./src/routes/niveauUniversite.routes') 
const niveauCollegeRoutes = require('./src/routes/niveauCollege.routes') 
const niveauLyceeRoutes = require('./src/routes/niveauLycee.routes') 
const niveauPrimaireRoutes = require('./src/routes/niveauPrimaire.routes') 
const niveauMaternelleRoutes = require('./src/routes/niveauMaternelle.routes') 
const ecoleRoutes = require('./src/routes/ecole.routes') 



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

//niveau
app.use('/api/niveau',/* verifyAuthToken,*/ niveauRoutes);

//niveau universitaire
app.use('/api/niveau-universite',/* verifyAuthToken,*/ niveauUniversiteRoutes);

//niveau college
app.use('/api/niveau-college',/* verifyAuthToken,*/ niveauCollegeRoutes);

//niveau lycee
app.use('/api/niveau-lycee',/* verifyAuthToken,*/ niveauLyceeRoutes);

//niveau primaire
app.use('/api/niveau-primaire',/* verifyAuthToken,*/ niveauPrimaireRoutes);

//niveau maternelle
app.use('/api/niveau-maternelle',/* verifyAuthToken,*/ niveauMaternelleRoutes);

//ecole
app.use('/api/ecole',/* verifyAuthToken,*/ ecoleRoutes);



//le port
app.listen(process.env.SERVEUR_PORT, () => 
    console.log(`Server started in port ${process.env.SERVEUR_PORT} && aller sur le swagger http://localhost:${process.env.SERVEUR_PORT}/ecoia-api-docs`
));