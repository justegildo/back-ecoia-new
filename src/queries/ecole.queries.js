const getAllEcoles = "SELECT e.id, e.nom, e.activites, e.resultats, e.classes, e.temoignagne, e.description, jsonb_build_object('id', n.id, 'libelle', n.libelle ) AS niveau FROM ecole AS e JOIN niveau AS n ON e.niveau_id = n.id"; 

const getEcoleById = "SELECT e.id, e.nom, e.activites, e.resultats, e.classes, e.temoignagne, e.description, jsonb_build_object('id', n.id, 'libelle', n.libelle ) AS niveau FROM ecole AS e LEFT JOIN niveau AS n ON e.niveau_id = n.id WHERE e.id = $1 ";

const addEcole = "INSERT INTO ecole ( nom, activites, resultats, raison_sociale, classes, temoignagne, description, niveau_id, departement_id, commune_id, arrondissement_id, quartier_id, utilisateur_id, geometry) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, ST_SetSRID(ST_MakePoint($14, $15), 4326) )";

const deleteEcole = "DELETE FROM ecole WHERE id = $1";

const updateEcole = "UPDATE ecole SET nom = $1, activites = $2, resultats = $3, raison_sociale  = $4, classes = $5, temoignagne = $6, description = $7, niveau_id = $8, departement_id = $9, commune_id = $10, arrondissement_id = $11, quartier_id = $12, utilisateur_id = $13, geometry = ST_SetSRID(ST_MakePoint($14, $15), 4326)  WHERE id = $16";



module.exports = {
    getAllEcoles,
    getEcoleById,
    addEcole,
    deleteEcole,
    updateEcole
}