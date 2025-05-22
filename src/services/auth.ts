// import { IResponse } from '../types/api.types';
import {
  AuthPayload,
  IAuthResponse,
  IMovie,
  IMovieIdData,
  IProfile,
} from '../types/blog.types';
import instance from '../utils/instance';
import { IResponse } from '../types/api.types';

export const AuthAPI = {
  getMovies: async (): Promise<IResponse<IMovie[]>> => {
    return instance({
      method: 'GET',
      url: 'movies',
    })
      .then((res) => res.data)
      .catch((err) => {
        return {
          result: false,
          data: null,
        };
      });
  },

  getMovieId: async (id: number): Promise<IResponse<IMovieIdData>> => {
    return instance({
      method: 'GET',
      url: 'movies/' + id,
    })
      .then((res) => res.data)
      .catch((err) => {
        return {
          result: false,
          data: null,
        };
      });
  },

  getProfile: async (): Promise<IResponse<IProfile>> => {
    return instance({
      method: 'GET',
      url: 'profile',
    })
      .then((res) => res.data)
      .catch((err) => {
        return {
          result: false,
          data: null,
        };
      });
  },

  authSignIn: async (
    data: Omit<AuthPayload, 'full_name'>
  ): Promise<IResponse<IAuthResponse>> => {
    return instance({
      method: 'POST',
      url: 'auth/login',
      data,
    })
      .then((res) => res.data)
      .catch((err) => {
        return {
          result: false,
          data: null,
        };
      });
  },

  authSignUp: async (data: AuthPayload): Promise<IResponse<null>> => {
    return instance({
      method: 'POST',
      url: 'auth/signup',
      data,
    })
      .then((res) => res.data)
      .catch((err) => {
        return {
          result: false,
          data: null,
        };
      });
  },
};
