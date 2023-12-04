const router = require('express').Router();
const niveauMaternelleController = require('../controllers/niveauMaternelle.controller');


/**
 * @swagger
 * /api/niveau-maternelle/add:
 *   post:
 *     summary: Créer un nouveau niveau maternelle
 *     tags:
 *      - Niveau Maternelle
 *     description: Crée un nouveau niveau maternelle avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       200:
 *         description: Niveau maternelle créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", niveauMaternelleController.addNiveauMaternelle);


/**
 * @swagger
 * /api/niveau-maternelle/:
 *   get:
 *     summary: Récupérer tous les niveaux maternelles
 *     tags:
 *      - Niveau Maternelle
 *     description: Renvoie une liste de tous les niveau maternelles.
 *     responses:
 *       200:
 *         description: Liste des niveau maternelles récupérés avec succès.
 */
router.get('/', niveauMaternelleController.getAllNiveauMaternelles);


/**
 * @swagger
 * /api/niveau-maternelle/{id}:
 *   get:
 *     summary: Récupérer un niveau maternelle par son identifiant
 *     tags:
 *      - Niveau Maternelle
 *     description: Renvoie un niveauMaternelle en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveauMaternelle à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau maternelle récupéré avec succès.
 *       404:
 *         description: Niveau maternelle non trouvé.
 */
router.get('/:id', niveauMaternelleController.getNiveauMaternelleById);


/**
 * @swagger
 * /api/niveau-maternelle/{id}:
 *   put:
 *     summary: Mettre à jour un niveau maternelle
 *     tags:
 *      - Niveau Maternelle
 *     description: Met à jour un niveauMaternelle en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveauMaternelle à mettre à jour
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
 *         description: Niveau maternelle mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', niveauMaternelleController.updateNiveauMaternelle);

/**
 * @swagger
 * /api/niveau-maternelle/{id}:
 *   delete:
 *     summary: Supprimer un niveau maternelle
 *     tags:
 *      - Niveau Maternelle
 *     description: Supprime un niveau maternelle en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveau maternelle à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau maternelle supprimé avec succès.
 *       404:
 *         description: Niveau maternelle non trouvé.
 */

router.delete('/:id', niveauMaternelleController.deleteNiveauMaternelle);  


module.exports = router;