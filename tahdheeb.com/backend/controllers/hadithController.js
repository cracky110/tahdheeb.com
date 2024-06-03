const Hadith = require('../models/hadithModel');

const HadithController = {
    getAllByChapterId: async (req, res) => {
        const hadiths = await Hadith.getAllByChapterId(req.params.chapterId);
        res.json(hadiths);
    },
    getById: async (req, res) => {
        const hadith = await Hadith.getById(req.params.hadithId);
        res.json(hadith);
    },
    create: async (req, res) => {
        const { text, isTranslated } = req.body;
        await Hadith.create(req.params.chapterId, req.params.bookId, text, isTranslated);
        res.status(201).json({ message: 'Hadith created' });
    },
    update: async (req, res) => {
        const { text, isTranslated } = req.body;
        await Hadith.update(req.params.hadithId, text, isTranslated);
        res.json({ message: 'Hadith updated' });
    },
    delete: async (req, res) => {
        await Hadith.delete(req.params.hadithId);
        res.json({ message: 'Hadith deleted' });
    }
};

module.exports = HadithController;
