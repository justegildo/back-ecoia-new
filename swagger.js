const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config({path: './src/config/.env'});


const swaggerDefinition = {
  openapi: '3.0.0',
  //basePath: '../back/src/components/schemas',
  info: {
    title: 'API REST',
    version: '1.0.0',
    description: 'API of ECOIA-APP',
    license: {
      name: "ECO-MOY",
      url: "https://spdx.org/licenses/JDG.html",
    },

    contact: {
      name: "Juste Gildo",
      url: "https://juste-gildo.com",
      email: "dossousedjrogildas@gmail.com",
    },
  },

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "apiKey",
        in: "Bearer",
        name: "Authorization",
      },

      OpenID: {
        type: "openIdConnect",
        openIdConnectUrl: 'https://example.com/.well-known/openid-configuration'
      }
    },

    security: [
      {
        bearerAuth: []
      }
    ],

    schemas: {
      Utilisateur: {
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "prenoms": {
            "type": "string"
          },
          "sexe": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "telephone": {
            "type": "string",
            "format": "number"
          },
          "password": {
            "type": "string"
          },
          "type_utilisateur": {
            "type": "string",
            //"format": "number"
          },
          "nom_ecole": {
            "type": "string"
          }
        },
        "required": [
          "nom", "prenom", "email", "password"
        ]
      },

      UpdateUtilisateur: {
         "type": "object",
         "properties": {
           "nom" : {
               "type": "string"
           },
           "prenoms": {
               "type": "string"
           }, 
           "sexe":{
               "type": "string"
           },
           "email": {
             "type": "string",
             "format": "email"
           },
           "telephone": {
             "type": "string",
             "format": "number"
           },
           "type_utilisateur": {
             "type": "string"
           }
           },
           "required": [ 
             "nom", "prenom", "email"
           ]
       },

      Authentification: {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "password": {
            "type": "string"
          }
        },
        "required": [
          "username", "password"
        ]
      },

      UpdatePassword: {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "oldPassword": {
            "type": "string"
          }
          ,
          "newPassword": {
            "type": "string"
          }
        },
        "required": [
          "username", "oldPassword", "newPassword"
        ]
      },

      ResetPassword: {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "newPassword": {
            "type": "string"
          }
        },
        "required": [
          "username", "newPassword"
        ]
      },

      Type: {
        "type": "object",
        "properties": {
          "libelle": {
            "type": "string"
          }
        },
        "required": [
          "libelle"
        ]
      },

      Ecole: {
        "type": "object",
        "properties": {
          "nom": {
            "type": "string"
          },
          "activites": {
            "type": "string"
          },
          "resultats": {
            "type": "string"
          }, 
          "raison_sociale": {
            "type": "string"
          }, 
          "classes": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }, 
          "temoignagne": {
            "type": "string"
          }, 
          "description": {
            "type": "string"
          }, 
          "niveau_id": {
            "type": "string"
          }, 
          "departement_id": {
            "type": "string"
          }, 
          "commune_id": {
            "type": "string"
          }, 
          "arrondissement_id": {
            "type": "string"
          }, 
          "quartier_id": {
            "type": "string"
          }, 
          "utilisateur_id": {
            "type": "string"
          }, 
          "latitude": {
            "type": "string"
          }, 
          "longitude": {
            "type": "string"
          }
        },
        "required": [
          "nom"
        ]
      },


    }
  },
  servers: [
    {
      url: `http://localhost:${process.env.SERVEUR_PORT}`,
      description: 'Local server',
      url: `http://192.168.100.26:${process.env.SERVEUR_PORT}`,
      description: 'Local server',
    },
  ],
};


const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};
//back-new/src/routes/*.js
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;