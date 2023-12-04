const router = require('express').Router();
const niveauUniversiteController = require('../controllers/niveauUniverste.controller');


/**
 * @swagger
 * /api/niveau-universite/add:
 *   post:
 *     summary: Créer un nouveau niveau universitaire
 *     tags:
 *      - Niveau Universitaire
 *     description: Crée un nouveau niveau universitaire avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       200:
 *         description: Niveau universitaire créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", niveauUniversiteController.addNiveauUniversite);


/**
 * @swagger
 * /api/niveau-universite/:
 *   get:
 *     summary: Récupérer tous les niveaux universitaires
 *     tags:
 *      - Niveau Universitaire
 *     description: Renvoie une liste de tous les niveau universitaires.
 *     responses:
 *       200:
 *         description: Liste des niveau universitaires récupérés avec succès.
 */
router.get('/', niveauUniversiteController.getAllNiveauUniversites);


/**
 * @swagger
 * /api/niveau-universite/{id}:
 *   get:
 *     summary: Récupérer un niveau universitaire par son identifiant
 *     tags:
 *      - Niveau Universitaire
 *     description: Renvoie un niveauUniversite en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveauUniversite à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau universitaire récupéré avec succès.
 *       404:
 *         description: Niveau universitaire non trouvé.
 */
router.get('/:id', niveauUniversiteController.getNiveauUniversiteById);


/**
 * @swagger
 * /api/niveau-universite/{id}:
 *   put:
 *     summary: Mettre à jour un niveau universitaire
 *     tags:
 *      - Niveau Universitaire
 *     description: Met à jour un niveauUniversite en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveauUniversite à mettre à jour
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
 *         description: Niveau universitaire mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', niveauUniversiteController.updateNiveauUniversite);

/**
 * @swagger
 * /api/niveau-universite/{id}:
 *   delete:
 *     summary: Supprimer un niveau universitaire
 *     tags:
 *      - Niveau Universitaire
 *     description: Supprime un niveau universitaire en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveau universitaire à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau universitaire supprimé avec succès.
 *       404:
 *         description: Niveau universitaire non trouvé.
 */

router.delete('/:id', niveauUniversiteController.deleteNiveauUniversite);  


module.exports = router;