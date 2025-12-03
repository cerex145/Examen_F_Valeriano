import { create } from 'zustand';
import { apiService } from '../services/GhibiliApi';

export const useFilmsStore = create((set, get) => ({

    films: [],


    allfilms: [],

    isLoading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,

    fetchFilms: async (page = 1) => {

        set({ isLoading: true, error: null });

        try {
            let allData = get().allFilms;

            if (allData.length === 0) {
                allData = await apiService.getAllFilms();
            }

            const itemsPerPage = 6;


            const totalPages = Math.ceil(allData.length / itemsPerPage);


            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;


            const itemsToShow = allData.slice(startIndex, endIndex);


            set({
                allFilms: allData,
                films: itemsToShow,
                currentPage: page,
                totalPages: totalPages,
                isLoading: false,
            });

        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    }
}));