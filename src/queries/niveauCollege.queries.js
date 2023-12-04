const getAllNiveauColleges = "SELECT * FROM niveau_college"; 

const getNiveauCollegeById = "SELECT * FROM niveau_college WHERE id = $1 ";

const addNiveauCollege = "INSERT INTO niveau_college (libelle) VALUES ($1)";

const deleteNiveauCollege = "DELETE FROM niveau_college WHERE id = $1";

const updateNiveauCollege = "UPDATE niveau_college SET libelle = $1 WHERE id = $2";



module.exports = {
    getAllNiveauColleges,
    getNiveauCollegeById,
    addNiveauCollege,
    deleteNiveauCollege,
    updateNiveauCollege
}