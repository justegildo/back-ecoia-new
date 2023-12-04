const db = require("../config/dbConfig");
const niveauMaternelleQueries = require('../queries/niveauMaternelle.queries');

//afficher tous les niveaus
module.exports.getAllNiveauMaternelles = async (req, res) => {

    const results = await db.query(niveauMaternelleQueries.getAllNiveauMaternelles)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(404).send("Pas de données disponible")
    }
}

// récupérer un niveau
module.exports.getNiveauMaternelleById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(niveauMaternelleQueries.getNiveauMaternelleById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(404).send("Ce niveau n'existe pas")
    }
} 

//env
module.exports.addNiveauMaternelle =  async (req, res) => {
    const { libelle } = req.body;

    //ajouter un niveau
    const result = await db.query(niveauMaternelleQueries.addNiveauMaternelle, [libelle])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Niveau créee avec succès !");
    } else {
        res.status(404).json("Impossible d'ajouter")
    }
} 
 

//modifier un niveau
module.exports.updateNiveauMaternelle = async (req, res) => {
    const id = parseInt(req.params.id);
    const { libelle } = req.body;

    const result = await db.query(niveauMaternelleQueries.getNiveauMaternelleById, [id])
    const noNiveauMaternelleFound = !result.rows.length;

    if (noNiveauMaternelleFound) {
        res.status(404).send("Impossible de modifier ce niveau car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(niveauMaternelleQueries.updateNiveauMaternelle, [libelle, id])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Niveau modifié avec succès !");
       } else {
        res.status(404).send("Erreur")
       }
    }
} 


//supprimer un niveau
module.exports.deleteNiveauMaternelle = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(niveauMaternelleQueries.getNiveauMaternelleById, [id])
    //console.log(results);

    try{
        const noNiveauMaternelleFound = !results.rows.length;
        if (noNiveauMaternelleFound) {
            res.send("Impossible de supprimer ce niveau car il n'existe pas dans la base de données. ");
        } else {
            const result = await db.query(niveauMaternelleQueries.deleteNiveauMaternelle, [id])
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
