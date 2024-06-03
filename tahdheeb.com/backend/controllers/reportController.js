const Report = require('../models/reportModel');

const ReportController = {
    create: async (req, res) => {
        const { hadithId, email, problem } = req.body;
        await Report.create(hadithId, email, problem);
        res.status(201).json({ message: 'Report submitted' });
    },
    getAll: async (req, res) => {
        const reports = await Report.getAll();
        res.json(reports);
    },
    update: async (req, res) => {
        const { status } = req.body;
        await Report.update(req.params.reportId, status);
        res.json({ message: 'Report updated' });
    },
    delete: async (req, res) => {
        await Report.delete(req.params.reportId);
        res.json({ message: 'Report deleted' });
    }
};

module.exports = ReportController;
