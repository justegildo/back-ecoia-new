const getAllNiveauUniversites = "SELECT * FROM niveau_universite "; 

const getNiveauUniversiteById = "SELECT * FROM niveau_universite WHERE id = $1";

const addNiveauUniversite = "INSERT INTO niveau_universite (libelle) VALUES ($1)";

const deleteNiveauUniversite = "DELETE FROM niveau_universite WHERE id = $1";

const updateNiveauUniversite = "UPDATE niveau_universite SET libelle = $1 WHERE id = $2";



module.exports = {
    getAllNiveauUniversites,
    getNiveauUniversiteById,
    addNiveauUniversite,
    deleteNiveauUniversite,
    updateNiveauUniversite
}