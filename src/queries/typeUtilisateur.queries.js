const getAllTypeUtilisateurs = "SELECT * FROM type_utilisateur WHERE libelle NOT LIKE ('ADMIN')"; 

const getTypeUtilisateurById = "SELECT * FROM type_utilisateur WHERE id = $1 AND libelle NOT LIKE ('ADMIN') ";

const addTypeUtilisateur = "INSERT INTO type_utilisateur (libelle) VALUES ($1)";

const deleteTypeUtilisateur = "DELETE FROM type_utilisateur WHERE id = $1";

const updateTypeUtilisateur = "UPDATE type_utilisateur SET libelle = $1 WHERE id = $2";



module.exports = {
    getAllTypeUtilisateurs,
    getTypeUtilisateurById,
    addTypeUtilisateur,
    deleteTypeUtilisateur,
    updateTypeUtilisateur
}