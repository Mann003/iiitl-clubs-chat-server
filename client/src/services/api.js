import axios from 'axios';

export const api = axios.create({
    baseURL: "https://iiitl-clubs-chat-server-production.up.railway.app/api/"
});

export const loginapi = axios.create({
    baseURL: "https://club-management-production.up.railway.app/"
});

export default api;