import axios from 'axios';

const API_URL = '/api/reports/';

const createReport = (report) => {
    return axios.post(API_URL, report);
};

const getReports = () => {
    return axios.get(API_URL);
};

const updateReport = (reportId, status) => {
    return axios.put(API_URL + reportId, { status });
};

const deleteReport = (reportId) => {
    return axios.delete(API_URL + reportId);
};

export default {
    createReport,
    getReports,
    updateReport,
    deleteReport,
};
