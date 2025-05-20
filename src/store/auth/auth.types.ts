import { IResponse } from '../../types/api.types';
import { AuthPayload, IAuthResponse, IProfile } from '../../types/blog.types';

interface IAuthStoreActions {
  getProfile: () => Promise<IResponse<IProfile>>;
  authSignIn: (
    data: Omit<AuthPayload, 'full_name'>
  ) => Promise<IResponse<IAuthResponse>>;
  authSignUp: (data: AuthPayload) => Promise<IResponse<null>>;
  reset: () => void;
}

export interface IAuthStore {
  loading: boolean;
  profile: IProfile | null;
  actions: IAuthStoreActions;
}
