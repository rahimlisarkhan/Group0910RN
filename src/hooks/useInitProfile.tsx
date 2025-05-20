import { useEffect, useState } from 'react';

import BootSplash from 'react-native-bootsplash';
import { useAuthStore } from '../store/auth/auth.store';
import { useShallow } from 'zustand/react/shallow';

export const useInitProfile = () => {
  const { getProfile, userAuthenticated } = useAuthStore(
    useShallow((state) => ({
      getProfile: state.actions.getProfile,
      userAuthenticated: state.profile,
    }))
  );

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    console.log('userAuthenticated', userAuthenticated);

    if (userAuthenticated) {
      BootSplash.hide({ fade: true });
    }
  }, [userAuthenticated]);

  return { userAuthenticated };
};
