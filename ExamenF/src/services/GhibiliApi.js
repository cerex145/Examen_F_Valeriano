const BASE_URL = 'https://ghibliapi.vercel.app/films';

export const apiService = {
    getAllFilms: async () => {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Error al cargar Peliculas');
        return response.json();
    },


    getFilmsById: async (id) => {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) throw new Error('Error al cargar Pelicula');
        return response.json();
    },


    searchFilms: async (name) => {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('No se encontraron Peliculas ');
        const products = await response.json();


        return products.filter(films =>
            films.title.toLowerCase().includes(name.toLowerCase())
        );
    },
};