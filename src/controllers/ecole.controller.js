const db = require("../config/dbConfig");
const ecoleQueries = require('../queries/ecole.queries');

//afficher tous les type utilisateurs
module.exports.getAllEcoles = async (req, res) => {

    const results = await db.query(ecoleQueries.getAllEcoles)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(404).send("Pas de données disponible")
    }
}

// récupérer un type utilisateur
module.exports.getEcoleById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(ecoleQueries.getEcoleById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(404).send("Cette école n'existe pas")
    }
} 

//env
module.exports.addEcole =  async (req, res) => {
    const { 
        nom, activites, resultats, raison_sociale, classes, temoignagne, description, niveau_id, departement_id, 
        commune_id, arrondissement_id, quartier_id, utilisateur_id, latitude, longitude
    } = req.body;

    //console.log(req.body.latitude);

    try{

        //ajouter un type utilisateur
        const result = await db.query(ecoleQueries.addEcole,
            [nom, activites, resultats, raison_sociale, classes, temoignagne, description, niveau_id, departement_id, 
                commune_id, arrondissement_id, quartier_id, utilisateur_id, latitude, longitude
            ])

        if (result.rowCount && result.command === 'INSERT') {
            res.status(201).send("Ecole créee avec succès !");
        } else {
            res.status(404).send("Impossible d'ajouter")
        }
    } catch (err){
        res.status(404).send(err)
    }
    
} 
 

//modifier un type utilisateur
module.exports.updateEcole = async (req, res) => {
    const id = parseInt(req.params.id);
    const { 
        nom, activites, resultats, raison_sociale, classes, temoignagne, description, niveau_id, departement_id, 
        commune_id, arrondissement_id, quartier_id, utilisateur_id , latitude, longitude
    } = req.body;


    const result = await db.query(ecoleQueries.getEcoleById, [id])
    const noEcoleFound = !result.rows.length;

    if (noEcoleFound) {
        res.status(404).send("Impossible de modifier cette école car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(ecoleQueries.updateEcole, 
        [nom, activites, resultats, raison_sociale, classes, temoignagne, description, niveau_id, 
            departement_id, commune_id, arrondissement_id, quartier_id, utilisateur_id, latitude, longitude, id
        ])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Ecole modifié avec succès !");
       } else {
        res.status(404).send("Erreur")
       }
    }
} 


//supprimer un type utilisateur
module.exports.deleteEcole = async(req, res) => {

    const id = parseInt(req.params.id);

    //console.log(id);
    const results = await db.query(ecoleQueries.getEcoleById, [id])
    //console.log(results.rows);

    try{
        const noEcoleFound = !results.rows.length;
        if (noEcoleFound) {
            res.send("Impossible de supprimer cette école car il n'existe pas dans la base de données. ");
        } else {
            const result = await db.query(ecoleQueries.deleteEcole, [id])
            //console.log(result);
            if (result) {
                res.status(200).send("Ecole supprimé avec succès");
            } else {
                res.status(404).send("Erreur")
            }
        }
    } catch (err){
        res.status(404).send(err)
    } 
} 




//rechercher une école par position
module.exports.searchEcolesByPosition = async (req, res) => {
    const { latitudeEcole, longitudeEcole, latitude, longitude, distanceMax } = req.body;
    //console.log(req.body);

    const result = await db.query(ecoleQueries.searchByPosition, [latitudeEcole, longitudeEcole, latitude, longitude, distanceMax])
    //console.log(result);  

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}


//rechercher une école par position et niveau 
module.exports.searchEcolesByPositionAndNiveau = async (req, res) => {
    const { latitudeEcole, longitudeEcole, latitude, longitude, distanceMax, niveau } = req.body;
    //console.log(req.body);

    const result = await db.query(ecoleQueries.searchByPositionAndNiveauType, 
        [ latitudeEcole, longitudeEcole, latitude, longitude, distanceMax, niveau ])
    //console.log(result);  

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }
}

//rechercher une école par position
module.exports.searchEcoles = async (req, res) => {
    const { departement, commune, arrondissement, quartier } = req.body;
    //console.log(req.body);

    const result = await db.query(ecoleQueries.search, [departement, commune, arrondissement, quartier])
    //console.log(result);  

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(400).send("Pas de données disponible")
    }

}