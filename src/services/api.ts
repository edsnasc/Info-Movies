import axios from "axios";

export const api = axios.create({
    baseURL: 'http://www.omdbapi.com/?s=sony&apikey='
})

