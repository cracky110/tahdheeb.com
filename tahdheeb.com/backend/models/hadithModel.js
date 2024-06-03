const pool = require('../config/db');

const Hadith = {
    getAllByChapterId: async (chapterId) => {
        const result = await pool.query('SELECT * FROM hadiths WHERE chapter_id = $1', [chapterId]);
        return result.rows;
    },
    getById: async (id) => {
        const result = await pool.query('SELECT * FROM hadiths WHERE id = $1', [id]);
        return result.rows[0];
    },
    create: async (chapterId, bookId, text, isTranslated) => {
        await pool.query('INSERT INTO hadiths (chapter_id, book_id, text, is_translated) VALUES ($1, $2, $3, $4)', [chapterId, bookId, text, isTranslated]);
    },
    update: async (id, text, isTranslated) => {
        await pool.query('UPDATE hadiths SET text = $1, is_translated = $2 WHERE id = $3', [text, isTranslated, id]);
    },
    delete: async (id) => {
        await pool.query('DELETE FROM hadiths WHERE id = $1', [id]);
    }
};

module.exports = Hadith;
