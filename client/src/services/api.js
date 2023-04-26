import axios from 'axios';

export const api = axios.create({
    baseURL: 'iiitl-clubs-chat-server-production.up.railway.app/api/'
});

export const loginapi = axios.create({
    baseURL: 'iiitl-clubs-chat-server-production.up.railway.app/'
});

export default api;