import axios from "axios";

export const api = axios.create({
    baseURL: 'https://imdb8.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        //'x-rapidapi-key': '60e33ce7a7msh3728236650af818p14f8b0jsn75e8f71d3dc9'
        // 'x-rapidapi-key': 'bd13e69af0mshf2ebd5322f14e13p1b6cdfjsnf9af72188ad2'
        // 'x-rapidapi-key': 'cf9adcb4eamsh3c639d275914abbp1ebea9jsn1c9b62f62926'
        'x-rapidapi-key': '6b1e9ff752mshee38e2a1320c3ffp13bbb9jsn2812d855779b'
    }
})
