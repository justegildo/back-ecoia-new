const router = require('express').Router();
const niveauLyceeController = require('../controllers/niveauLycee.controller');


/**
 * @swagger
 * /api/niveau-lycee/add:
 *   post:
 *     summary: Créer un nouveau niveau 
 *     tags:
 *      - Niveau Lycee 
 *     description: Crée un nouveau niveau  avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       200:
 *         description: Niveau créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", niveauLyceeController.addNiveauLycee);


/**
 * @swagger
 * /api/niveau-lycee/:
 *   get:
 *     summary: Récupérer tous les niveaux s
 *     tags:
 *      - Niveau Lycee 
 *     description: Renvoie une liste de tous les niveau s.
 *     responses:
 *       200:
 *         description: Liste des niveau s récupérés avec succès.
 */
router.get('/', niveauLyceeController.getAllNiveauLycees);


/**
 * @swagger
 * /api/niveau-lycee/{id}:
 *   get:
 *     summary: Récupérer un niveau  par son identifiant
 *     tags:
 *      - Niveau Lycee 
 *     description: Renvoie un niveauLycee en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveauLycee à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau  récupéré avec succès.
 *       404:
 *         description: Niveau  non trouvé.
 */
router.get('/:id', niveauLyceeController.getNiveauLyceeById);


/**
 * @swagger
 * /api/niveau-lycee/{id}:
 *   put:
 *     summary: Mettre à jour un niveau 
 *     tags:
 *      - Niveau Lycee 
 *     description: Met à jour un niveauLycee en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveauLycee à mettre à jour
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
router.put('/:id', niveauLyceeController.updateNiveauLycee);

/**
 * @swagger
 * /api/niveau-lycee/{id}:
 *   delete:
 *     summary: Supprimer un niveau 
 *     tags:
 *      - Niveau Lycee 
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

router.delete('/:id', niveauLyceeController.deleteNiveauLycee);  


module.exports = router;