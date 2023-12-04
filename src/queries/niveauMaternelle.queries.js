const getAllNiveauMaternelles = "SELECT * FROM niveau_maternelle "; 

const getNiveauMaternelleById = "SELECT * FROM niveau_maternelle WHERE id = $1";

const addNiveauMaternelle = "INSERT INTO niveau_maternelle (libelle) VALUES ($1)";

const deleteNiveauMaternelle = "DELETE FROM niveau_maternelle WHERE id = $1";

const updateNiveauMaternelle = "UPDATE niveau_maternelle SET libelle = $1 WHERE id = $2";



module.exports = {
    getAllNiveauMaternelles,
    getNiveauMaternelleById,
    addNiveauMaternelle,
    deleteNiveauMaternelle,
    updateNiveauMaternelle
}