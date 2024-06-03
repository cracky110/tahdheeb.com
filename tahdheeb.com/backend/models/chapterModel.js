const pool = require('../config/db');

const Chapter = {
    getAllByBookId: async (bookId) => {
        const result = await pool.query('SELECT * FROM chapters WHERE book_id = $1', [bookId]);
        return result.rows;
    },
    getById: async (id) => {
        const result = await pool.query('SELECT * FROM chapters WHERE id = $1', [id]);
        return result.rows[0];
    },
    create: async (bookId, title) => {
        await pool.query('INSERT INTO chapters (book_id, title) VALUES ($1, $2)', [bookId, title]);
    },
    update: async (id, title) => {
        await pool.query('UPDATE chapters SET title = $1 WHERE id = $2', [title, id]);
    },
    delete: async (id) => {
        await pool.query('DELETE FROM chapters WHERE id = $1', [id]);
    }
};

module.exports = Chapter;
