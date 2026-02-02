const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

/**
 * @swagger
 * /api/team-members:
 *   get:
 *     summary: Retrieve a list of team members
 *     description: Retrieve all team members from the database.
 *     responses:
 *       200:
 *         description: A list of team members.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The user's name.
 *                     example: John Doe
 *                   role:
 *                     type: string
 *                     description: The user's role.
 *                     example: Developer
 *                   experience:
 *                     type: string
 *                     description: Years of experience.
 *                     example: 5 years
 *       500:
 *         description: Server Error
 */
router.get('/team-members', teamController.getTeamMembers);

module.exports = router;
