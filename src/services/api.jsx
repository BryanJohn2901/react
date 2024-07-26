import axios from 'axios';

/* URL da api - https://api.themoviedb.org/3/ */
/* URL Base - movie/now_playing?api_key=5c4e80a9c8e7a870d079fbd46a94ede8*/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
