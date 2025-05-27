import { useEffect, useState } from 'react';

import BootSplash from 'react-native-bootsplash';
import { useAuthStore } from '../store/auth/auth.store';
import { useShallow } from 'zustand/react/shallow';
import LocalStorage from '../store/localStorage';
import { getFcmToken } from '../utils/fcm';

export const useInitProfile = () => {
  const [ready, setReady] = useState<boolean>(false);

  const { getProfile, userAuthenticated } = useAuthStore(
    useShallow((state) => ({
      getProfile: state.actions.getProfile,
      userAuthenticated: state.profile,
    }))
  );

  useEffect(() => {
    getProfile().finally(() => {
      BootSplash.hide({ fade: true });
      setReady(true);
    });
  }, []);

  useEffect(() => {
    getFcmToken();
    const token = LocalStorage.getItem('access_token');
    if (token) {
      BootSplash.hide({ fade: true });
      setReady(true);
    }
  }, []);

  return { userAuthenticated, ready };
};
