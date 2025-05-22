import { IResponse } from '../../types/api.types';
import {
  AuthPayload,
  IAuthResponse,
  IMovie,
  IMovieIdData,
  IProfile,
} from '../../types/blog.types';

interface IAuthStoreActions {
  getProfile: () => Promise<IResponse<IProfile>>;
  getMovies: () => Promise<IResponse<IMovie[]>>;
  getMovie: (id: number) => Promise<IResponse<IMovieIdData>>;
  authSignIn: (
    data: Omit<AuthPayload, 'full_name'>
  ) => Promise<IResponse<IAuthResponse>>;
  authSignUp: (data: AuthPayload) => Promise<IResponse<null>>;
  reset: () => void;
}

export interface IAuthStore {
  loading: boolean;
  profile: IProfile | null;
  movies: IMovie[] | null;
  movie: IMovieIdData | null;
  actions: IAuthStoreActions;
}
