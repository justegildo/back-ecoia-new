const db = require("../config/dbConfig");
const niveauCollegeQueries = require('../queries/niveauCollege.queries');

//afficher tous les niveaus
module.exports.getAllNiveauColleges = async (req, res) => {

    const results = await db.query(niveauCollegeQueries.getAllNiveauColleges)
    //console.log(result.rowCount);

    if(results.rowCount){
        res.status(200).json(results.rows);
    } else {
        res.status(404).send("Pas de données disponible")
    }
}

// récupérer un niveau
module.exports.getNiveauCollegeById = async(req, res) =>{
    const id = parseInt(req.params.id);

    const result = await db.query(niveauCollegeQueries.getNiveauCollegeById, [id])
    //console.log(result.rowCount);

    if(result.rowCount){
        res.status(200).json(result.rows);
    } else {
        res.status(404).send("Ce niveau n'existe pas")
    }
} 

//env
module.exports.addNiveauCollege =  async (req, res) => {
    const { libelle } = req.body;

    //ajouter un niveau
    const result = await db.query(niveauCollegeQueries.addNiveauCollege, [libelle])

    if(result.rowCount && result.command === 'INSERT'){
        res.status(201).send("Niveau créee avec succès !");
    } else {
        res.status(404).json("Impossible d'ajouter")
    }
} 
 

//modifier un niveau
module.exports.updateNiveauCollege = async (req, res) => {
    const id = parseInt(req.params.id);
    const { libelle } = req.body;

    const result = await db.query(niveauCollegeQueries.getNiveauCollegeById, [id])
    const noNiveauCollegeFound = !result.rows.length;

    if (noNiveauCollegeFound) {
        res.status(404).send("Impossible de modifier ce niveau car il n'existe pas dans la base de données.");
    } else {
       const results = await db.query(niveauCollegeQueries.updateNiveauCollege, [libelle, id])

       if(results.rowCount && results.command === 'UPDATE'){
             res.status(200).send("Niveau modifié avec succès !");
       } else {
        res.status(404).send("Erreur")
       }
    }
} 


//supprimer un niveau
module.exports.deleteNiveauCollege = async(req, res) => {

    const id = parseInt(req.params.id);

    const results = await db.query(niveauCollegeQueries.getNiveauCollegeById, [id])
    //console.log(results);

    try{
        const noNiveauCollegeFound = !results.rows.length;
        if (noNiveauCollegeFound) {
            res.send("Impossible de supprimer ce niveau car il n'existe pas dans la base de données. ");
        } else {
            const result = await db.query(niveauCollegeQueries.deleteNiveauCollege, [id])
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
