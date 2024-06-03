import axios from 'axios';

const API_URL = '/api/auth/';

const register = (username, password) => {
    return axios.post(API_URL + 'register', { username, password });
};

const login = (username, password) => {
    return axios.post(API_URL + 'login', { username, password });
};

const logout = () => {
    return axios.post(API_URL + 'logout');
};

export default {
    register,
    login,
    logout,
};
