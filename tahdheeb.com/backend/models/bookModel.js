const pool = require('../config/db');

const Book = {
    getAll: async () => {
        const result = await pool.query('SELECT * FROM books');
        return result.rows;
    },
    getById: async (id) => {
        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
        return result.rows[0];
    },
    create: async (title, totalHadith, translatedHadith) => {
        await pool.query('INSERT INTO books (title, total_hadith, translated_hadith) VALUES ($1, $2, $3)', [title, totalHadith, translatedHadith]);
    },
    update: async (id, title, totalHadith, translatedHadith) => {
        await pool.query('UPDATE books SET title = $1, total_hadith = $2, translated_hadith = $3 WHERE id = $4', [title, totalHadith, translatedHadith, id]);
    },
    delete: async (id) => {
        await pool.query('DELETE FROM books WHERE id = $1', [id]);
    }
};

module.exports = Book;
