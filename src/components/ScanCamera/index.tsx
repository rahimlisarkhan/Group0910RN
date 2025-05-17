import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export function ScanCamera() {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const [isReady, setIsReady] = useState(false);

  console.log('isReady', isReady);

  useEffect(() => {
    (async () => {
      if (!hasPermission) {
        await requestPermission();
      }
      setIsReady(true);
    })();
  }, [hasPermission]);

  if (!hasPermission) return <Text>Permission denied</Text>;
  if (device == null) return <Text>Device not found</Text>;

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}
