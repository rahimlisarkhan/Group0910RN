import { StyleSheet } from 'react-native';
import React, { PropsWithChildren, useCallback, useRef } from 'react';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Backdrop } from '../../Backdrop';

interface ProductDetailSheetProps {
  sheetRef: React.RefObject<BottomSheetModal>;
  handleChanges?: (index: number) => void;
}

const ProductDetailSheet = ({
  sheetRef,
  handleChanges,
  children,
}: PropsWithChildren<ProductDetailSheetProps>) => {
  const handleSheetChanges = useCallback((index: number) => {
    handleChanges?.(index);
  }, []);

  return (
    <BottomSheetModal
      ref={sheetRef}
      snapPoints={[200, 500, '100%']}
      enableDynamicSizing={false}
      onChange={handleSheetChanges}
      backdropComponent={Backdrop}
      handleIndicatorStyle={{
        backgroundColor: 'gray',
        width: 40,
        height: 2,
        borderRadius: 2,
      }}
      backgroundStyle={{ borderRadius: 34 }}
      style={{
        backgroundColor: 'white',
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
      }}
    >
      <BottomSheetScrollView style={styles.contentContainer}>
        {children}
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};

export default ProductDetailSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
});
