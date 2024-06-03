import axios from 'axios';

const API_URL = '/api/books/';

const getChapters = (bookId) => {
    return axios.get(`${API_URL}${bookId}/chapters`);
};

const getChapter = (bookId, chapterId) => {
    return axios.get(`${API_URL}${bookId}/chapters/${chapterId}`);
};

const createChapter = (bookId, chapter) => {
    return axios.post(`${API_URL}${bookId}/chapters`, chapter);
};

const updateChapter = (bookId, chapterId, chapter) => {
    return axios.put(`${API_URL}${bookId}/chapters/${chapterId}`, chapter);
};

const deleteChapter = (bookId, chapterId) => {
    return axios.delete(`${API_URL}${bookId}/chapters/${chapterId}`);
};

export default {
    getChapters,
    getChapter,
    createChapter,
    updateChapter,
    deleteChapter,
};
