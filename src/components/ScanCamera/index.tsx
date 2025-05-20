import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

export function ScanCamera() {
  const device = useCameraDevice('front');
  const { hasPermission, requestPermission } = useCameraPermission();
  const [isReady, setIsReady] = useState(false);

  const { navigate } = useNavigation<any>();

  console.log('isReady', isReady);

  useEffect(() => {
    (async () => {
      if (!hasPermission) {
        await requestPermission();
      }
      setIsReady(true);
    })();
  }, [hasPermission]);

  const onCodeScanned = useCallback((codes: Code[]) => {
    const verfication = codes[0]?.value;
    const verficationCodeList = verfication?.split('/');
    const code = verficationCodeList?.[verficationCodeList?.length - 1];
    console.log('code', code);

    navigate('Details', {
      name: 'Student',
      code,
    });
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'code-128'],
    onCodeScanned,
  });

  if (!isReady) return <Text>Permission denied</Text>;
  if (!hasPermission) return <Text>Permission denied</Text>;
  if (device == null) return <Text>Device not found</Text>;

  return (
    <Camera
      style={{ width: 300, height: 300 }}
      device={device}
      codeScanner={codeScanner}
      isActive={true}
      torch="off"
      zoom={2}
    />
  );
}
