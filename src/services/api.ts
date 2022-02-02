import axios from "axios";

export const api = axios.create({
    baseURL: 'https://imdb8.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': 'your_key'
     
    }
})
