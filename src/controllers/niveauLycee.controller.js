const db = require("../config/dbConfig");
const niveauLyceeQueries = require('../queries/niveauLycee.queries');

//afficher tous les niveaus
module.exports.getAllNiveauLycees = async (req, res) => {

    const results = await db.query(niveauLyceeQueries.getAllNiveauLycees)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(404).send("Pas de données disponible")
    }
}

// récupérer un niveau
module.exports.getNiveauLyceeById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(niveauLyceeQueries.getNiveauLyceeById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(404).send("Ce niveau n'existe pas")
    }
} 

//env
module.exports.addNiveauLycee =  async (req, res) => {
    const { libelle } = req.body;

    //ajouter un niveau
    const result = await db.query(niveauLyceeQueries.addNiveauLycee, [libelle])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Niveau créee avec succès !");
    } else {
        res.status(404).json("Impossible d'ajouter")
    }
} 
 

//modifier un niveau
module.exports.updateNiveauLycee = async (req, res) => {
    const id = parseInt(req.params.id);
    const { libelle } = req.body;

    const result = await db.query(niveauLyceeQueries.getNiveauLyceeById, [id])
    const noNiveauLyceeFound = !result.rows.length;

    if (noNiveauLyceeFound) {
        res.status(404).send("Impossible de modifier ce niveau car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(niveauLyceeQueries.updateNiveauLycee, [libelle, id])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Niveau modifié avec succès !");
       } else {
        res.status(404).send("Erreur")
       }
    }
} 


//supprimer un niveau
module.exports.deleteNiveauLycee = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(niveauLyceeQueries.getNiveauLyceeById, [id])
    //console.log(results);

    try{
        const noNiveauLyceeFound = !results.rows.length;
        if (noNiveauLyceeFound) {
            res.send("Impossible de supprimer ce niveau car il n'existe pas dans la base de données. ");
        } else {
            const result = await db.query(niveauLyceeQueries.deleteNiveauLycee, [id])
            //console.log(result);
            if (result) {
                res.status(200).send("Niveau supprimé avec succès");
            } else {
                res.status(404).send("Erreur")
            }
        }
    } catch (err){
        res.status(404).send(err)
    }
    
} 
