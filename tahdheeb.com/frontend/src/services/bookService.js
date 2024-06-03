import axios from 'axios';

const API_URL = '/api/books/';

const getBooks = () => {
    return axios.get(API_URL);
};

const getBook = (bookId) => {
    return axios.get(API_URL + bookId);
};

const createBook = (book) => {
    return axios.post(API_URL, book);
};

const updateBook = (bookId, book) => {
    return axios.put(API_URL + bookId, book);
};

const deleteBook = (bookId) => {
    return axios.delete(API_URL + bookId);
};

export default {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
};
