const router = require('express').Router();
const niveauCollegeController = require('../controllers/niveauCollege.controller');


/**
 * @swagger
 * /api/niveau-college/add:
 *   post:
 *     summary: Créer un nouveau niveau collège
 *     tags:
 *      - Niveau College
 *     description: Crée un nouveau niveau collège avec les informations fournies.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       200:
 *         description: Niveau collège créé avec succès.
 *       400:
 *         description: Données d'entrée non valides.
 */
router.post("/add", niveauCollegeController.addNiveauCollege);


/**
 * @swagger
 * /api/niveau-college/:
 *   get:
 *     summary: Récupérer tous les niveaux collèges
 *     tags:
 *      - Niveau College
 *     description: Renvoie une liste de tous les niveauColleges.
 *     responses:
 *       200:
 *         description: Liste des niveaux collèges récupérés avec succès.
 */
router.get('/', niveauCollegeController.getAllNiveauColleges);


/**
 * @swagger
 * /api/niveau-college/{id}:
 *   get:
 *     summary: Récupérer un niveau collège par son identifiant
 *     tags:
 *      - Niveau College
 *     description: Renvoie un niveau collège en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveau college à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau collège récupéré avec succès.
 *       404:
 *         description: Niveau collège non trouvé.
 */
router.get('/:id', niveauCollegeController.getNiveauCollegeById);


/**
 * @swagger
 * /api/niveau-college/{id}:
 *   put:
 *     summary: Mettre à jour un niveau collège
 *     tags:
 *      - Niveau College
 *     description: Met à jour un niveau collège en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveau collège à mettre à jour
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
 *         description: Niveau college mis à jour avec succès.
 *       400:
 *         description: Données d'entrée non valid
*/
router.put('/:id', niveauCollegeController.updateNiveauCollege);

/**
 * @swagger
 * /api/niveau-college/{id}:
 *   delete:
 *     summary: Supprimer un niveau collège
 *     tags:
 *      - Niveau College
 *     description: Supprime un niveau collège en fonction de son identifiant.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du niveau collège à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Niveau collège supprimé avec succès.
 *       404:
 *         description: Niveau collège non trouvé.
 */

router.delete('/:id', niveauCollegeController.deleteNiveauCollege);  


module.exports = router;