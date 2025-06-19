import axios from 'axios'

export const axiosConfig = axios.create({
    withCredentials: true,
    baseURL: "https://localhost:8080/v1/"
});