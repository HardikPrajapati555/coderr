const express = require('express');
const router = express.Router();
const screenController = require('../controllers/screenController');

/**
 * @swagger
 * /screens:
 *   get:
 *     summary: Get all screens
 *     responses:
 *       200:
 *         description: List of screens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Screen'
 *   post:
 *     summary: Create a new screen
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Screen'
 *     responses:
 *       201:
 *         description: Screen created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Screen'
 */

/**
 * @swagger
 * /screens/{screen_id}:
 *   get:
 *     summary: Get screen by screen_id
 *     parameters:
 *       - name: screen_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Screen found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Screen'
 *       404:
 *         description: Screen not found
 *   put:
 *     summary: Update a screen by screen_id
 *     parameters:
 *       - name: screen_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Screen'
 *     responses:
 *       200:
 *         description: Screen updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Screen'
 *       404:
 *         description: Screen not found
 *   delete:
 *     summary: Delete a screen by screen_id
 *     parameters:
 *       - name: screen_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Screen deleted successfully
 *       '404':
 *         description: Screen not found
 */

router.get('/screens', screenController.getAllScreens);
router.post('/screens', screenController.createScreen);
router.get('/screens/:screen_id', screenController.getScreenById);
router.put('/screens/:screen_id', screenController.updateScreen);
router.delete('/screens/:screen_id', screenController.deleteScreenById);

module.exports = router;
