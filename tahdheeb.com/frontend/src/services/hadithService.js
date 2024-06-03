import axios from 'axios';

const API_URL = '/api/books/';

const getHadiths = (bookId, chapterId) => {
    return axios.get(`${API_URL}${bookId}/chapters/${chapterId}/hadiths`);
};

const getHadith = (bookId, chapterId, hadithId) => {
    return axios.get(`${API_URL}${bookId}/chapters/${chapterId}/hadiths/${hadithId}`);
};

const createHadith = (bookId, chapterId, hadith) => {
    return axios.post(`${API_URL}${bookId}/chapters/${chapterId}/hadiths`, hadith);
};

const updateHadith = (bookId, chapterId, hadithId, hadith) => {
    return axios.put(`${API_URL}${bookId}/chapters/${chapterId}/hadiths/${hadithId}`, hadith);
};

const deleteHadith = (bookId, chapterId, hadithId) => {
    return axios.delete(`${API_URL}${bookId}/chapters/${chapterId}/hadiths/${hadithId}`);
};

export default {
    getHadiths,
    getHadith,
    createHadith,
    updateHadith,
    deleteHadith,
};
