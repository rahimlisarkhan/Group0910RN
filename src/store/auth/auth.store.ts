import { create } from 'zustand';
import { IAuthStore } from './auth.types';
import { AuthAPI } from '../../services/auth';
import LocalStorage from '../localStorage';

// import { CalendarAPI } from '../../services/api/calendar.api';

const initial: Omit<IAuthStore, 'actions'> = {
  loading: false,
  profile: null,
  movies: [],
  movie: null,
};

export const useAuthStore = create<IAuthStore>((set) => ({
  ...initial,
  actions: {
    getMovie: async (id: number) => {
      set({ loading: true });
      const response = await AuthAPI.getMovieId(id);
      set({ loading: false, movie: response.data });
      return response;
    },

    getMovies: async () => {
      set({ loading: true });
      const response = await AuthAPI.getMovies();

      console.log('response', response);

      set({ loading: false, movies: response.data });
      return response;
    },

    getProfile: async () => {
      set({ loading: true });
      const response = await AuthAPI.getProfile();

      console.log('response1', response);

      if (response?.result) {
        set({ loading: false, profile: response.data });
      }

      return response;
    },

    authSignIn: async (data) => {
      set({ loading: true });
      const response = await AuthAPI.authSignIn(data);
      set({ loading: false });
      if (response.result) {
        LocalStorage.setItem('access_token', response.data.tokens.access_token);
        set({ profile: response.data.profile });
      }
      return response;
    },

    authSignUp: async (data) => {
      set({ loading: true });
      const response = await AuthAPI.authSignUp(data);
      set({ loading: false });
      return response;
    },

    reset: () => set({ ...initial }),
  },
}));
