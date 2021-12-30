import axios from "axios";

export const api = axios.create({
    baseURL: 'https://imdb8.p.rapidapi.com',
    headers:{ 
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': '60e33ce7a7msh3728236650af818p14f8b0jsn75e8f71d3dc9'
    }
})

