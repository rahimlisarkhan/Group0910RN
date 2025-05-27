import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import { Platform, PermissionsAndroid } from 'react-native';

export const requestFCMPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true; // iOS handled by messaging().requestPermission()
};

export const getFcmToken = async (): Promise<string | null> => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) {
      console.log('FCM permission denied');
      return null;
    }

    const token = await messaging().getToken();
    console.log('FCM Token:', token);

    return token;
  } catch (error) {
    console.error('Failed to get FCM token:', error);
    return null;
  }
};
