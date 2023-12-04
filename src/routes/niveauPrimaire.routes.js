const  router = require('express').Router();
const niveauPrimaireController = require('../controllers/niveauPrimaire.controller');


/**
 * @swagger
 * /api/niveau-primaire/add:
 *   post:
 *     summary: Créer un nouveau niveau 
 *     tags:
 *      - Niveau Primaire 
 *     description: Crée un nouveau niveau  avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       200:
 *         description: Niveau  créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", niveauPrimaireController.addNiveauPrimaire);


/**
 * @swagger
 * /api/niveau-primaire/:
 *   get:
 *     summary: Récupérer tous les niveaux s
 *     tags:
 *      - Niveau Primaire 
 *     description: Renvoie une liste de tous les niveau s.
 *     responses:
 *       200:
 *         description: Liste des niveau s récupérés avec succès.
 */
router.get('/', niveauPrimaireController.getAllNiveauPrimaires);


/**
 * @swagger
 * /api/niveau-primaire/{id}:
 *   get:
 *     summary: Récupérer un niveau  par son identifiant
 *     tags:
 *      - Niveau Primaire 
 *     description: Renvoie un niveauPrimaire en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveauPrimaire à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau  récupéré avec succès.
 *       404:
 *         description: Niveau  non trouvé.
 */
router.get('/:id', niveauPrimaireController.getNiveauPrimaireById);


/**
 * @swagger
 * /api/niveau-primaire/{id}:
 *   put:
 *     summary: Mettre à jour un niveau 
 *     tags:
 *      - Niveau Primaire 
 *     description: Met à jour un niveau en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveau à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       200:
 *         description: Niveau  mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', niveauPrimaireController.updateNiveauPrimaire);

/**
 * @swagger
 * /api/niveau-primaire/{id}:
 *   delete:
 *     summary: Supprimer un niveau 
 *     tags:
 *      - Niveau Primaire 
 *     description: Supprime un niveau  en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveau  à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau  supprimé avec succès.
 *       404:
 *         description: Niveau  non trouvé.
 */

router.delete('/:id', niveauPrimaireController.deleteNiveauPrimaire);  


module.exports = router;