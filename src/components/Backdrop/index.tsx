import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { StyleSheet } from 'react-native';

export const Backdrop = (
  props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps
) => (
  <BottomSheetBackdrop
    {...props}
    disappearsOnIndex={-1}
    appearsOnIndex={1}
    style={styles.content}
  />
);

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0.5,
  },
});
