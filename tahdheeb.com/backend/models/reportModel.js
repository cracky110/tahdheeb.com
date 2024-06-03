const pool = require('../config/db');

const Report = {
    create: async (hadithId, email, problem) => {
        await pool.query('INSERT INTO reports (hadith_id, email, problem, status) VALUES ($1, $2, $3, $4)', [hadithId, email, problem, 'new']);
    },
    getAll: async () => {
        const result = await pool.query('SELECT * FROM reports');
        return result.rows;
    },
    update: async (id, status) => {
        await pool.query('UPDATE reports SET status = $1 WHERE id = $2', [status, id]);
    },
    delete: async (id) => {
        await pool.query('DELETE FROM reports WHERE id = $1', [id]);
    }
};

module.exports = Report;
