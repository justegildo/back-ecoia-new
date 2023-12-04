const getAllNiveaux = "SELECT * FROM niveau"; 

const getNiveauById = "SELECT * FROM niveau WHERE id = $1";

const addNiveau = "INSERT INTO niveau (libelle) VALUES ($1)";

const deleteNiveau = "DELETE FROM niveau WHERE id = $1";

const updateNiveau = "UPDATE niveau SET libelle = $1 WHERE id = $2";



module.exports = {
    getAllNiveaux,
    getNiveauById,
    addNiveau,
    deleteNiveau,
    updateNiveau
}