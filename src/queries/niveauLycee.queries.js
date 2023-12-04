const getAllNiveauLycees = "SELECT * FROM niveau_lycee "; 

const getNiveauLyceeById = "SELECT * FROM niveau_lycee WHERE id = $1";

const addNiveauLycee = "INSERT INTO niveau_lycee (libelle) VALUES ($1)";

const deleteNiveauLycee = "DELETE FROM niveau_lycee WHERE id = $1";

const updateNiveauLycee = "UPDATE niveau_lycee SET libelle = $1 WHERE id = $2";



module.exports = {
    getAllNiveauLycees,
    getNiveauLyceeById,
    addNiveauLycee,
    deleteNiveauLycee,
    updateNiveauLycee
}