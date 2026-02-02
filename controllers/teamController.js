const db = require('../config/db');

exports.getTeamMembers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM team_members');

        res.status(200).json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error('DB ERROR:', error);
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
};
