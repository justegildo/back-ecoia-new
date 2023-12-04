const db = require("../config/dbConfig");
const niveauQueries = require('../queries/niveau.queries');

//afficher tous les type utilisateurs
module.exports.getAllNiveaux = async (req, res) => {

    const results = await db.query(niveauQueries.getAllNiveaux)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(404).send("Pas de données disponible")
    }
}

// récupérer niveau
module.exports.getNiveauById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(niveauQueries.getNiveauById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(404).send("Ce niveau n'existe pas")
    }
} 

//env
module.exports.addNiveau =  async (req, res) => {
    const { libelle } = req.body;

    //ajouter niveau
    const result = await db.query(niveauQueries.addNiveau, [libelle])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Niveau créee avec succès !");
    } else {
        res.status(404).json("Impossible d'ajouter")
    }
} 
 

//modifier niveau
module.exports.updateNiveau = async (req, res) => {
    const id = parseInt(req.params.id);
    const { libelle } = req.body;

    const result = await db.query(niveauQueries.getNiveauById, [id])
    const noNiveauFound = !result.rows.length;

    if (noNiveauFound) {
        res.status(404).send("Impossible de modifier ce veau car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(niveauQueries.updateNiveau, [libelle, id])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Niveau modifié avec succès !");
       } else {
        res.status(404).send("Erreur")
       }
    }
} 


//supprimer niveau
module.exports.deleteNiveau = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(niveauQueries.getNiveauById, [id])
    //console.log(results);

    try{
        const noNiveauFound = !results.rows.length;
        if (noNiveauFound) {
            res.send("Impossible de supprimer ce niveau car il n'existe pas dans la base de données. ");
        } else {
            const result = await db.query(niveauQueries.deleteNiveau, [id])
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
