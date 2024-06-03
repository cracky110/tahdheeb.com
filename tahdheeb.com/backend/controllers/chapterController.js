const Chapter = require('../models/chapterModel');

const ChapterController = {
    getAllByBookId: async (req, res) => {
        const chapters = await Chapter.getAllByBookId(req.params.bookId);
        res.json(chapters);
    },
    getById: async (req, res) => {
        const chapter = await Chapter.getById(req.params.chapterId);
        res.json(chapter);
    },
    create: async (req, res) => {
        const { title } = req.body;
        await Chapter.create(req.params.bookId, title);
        res.status(201).json({ message: 'Chapter created' });
    },
    update: async (req, res) => {
        const { title } = req.body;
        await Chapter.update(req.params.chapterId, title);
        res.json({ message: 'Chapter updated' });
    },
    delete: async (req, res) => {
        await Chapter.delete(req.params.chapterId);
        res.json({ message: 'Chapter deleted' });
    }
};

module.exports = ChapterController;
