const getAllNiveauPrimaires = "SELECT * FROM niveau_primaire "; 

const getNiveauPrimaireById = "SELECT * FROM niveau_primaire WHERE id = $1";

const addNiveauPrimaire = "INSERT INTO niveau_primaire (libelle) VALUES ($1)";

const deleteNiveauPrimaire = "DELETE FROM niveau_primaire WHERE id = $1";

const updateNiveauPrimaire = "UPDATE niveau_primaire SET libelle = $1 WHERE id = $2";



module.exports = {
    getAllNiveauPrimaires,
    getNiveauPrimaireById,
    addNiveauPrimaire,
    deleteNiveauPrimaire,
    updateNiveauPrimaire
}