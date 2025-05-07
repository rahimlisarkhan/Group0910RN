import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  findNodeHandle,
  UIManager,
  Dimensions,
} from 'react-native';

interface ActionPopupModalProps {
  visible: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  btnOptions: any;
}

const ActionPopupModal: React.FC<ActionPopupModalProps> = ({
  visible,
  onClose,
  onEdit,
  onDelete,
  btnOptions,
}) => {
  const [modalPos, setModalPos] = useState({ x: 0, y: 0 });

  const { width } = Dimensions.get('window');
  const popupWidth = 180;
  const popupX = Math.min(modalPos.x, width - popupWidth - 10); // prevent overflow

  console.log('btnOptions', btnOptions);
  console.log('modalPos', modalPos);

  useEffect(() => {
    if (visible) {
      const handle = findNodeHandle(btnOptions);
      if (handle) {
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
          setModalPos({ x: pageX, y: pageY + height });
        });
      }
    }
  }, [visible, btnOptions]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={[styles.popup, { top: modalPos.y + 10, left: popupX }]}>
          <TouchableOpacity style={styles.option} onPress={onEdit}>
            <Text style={styles.optionText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={onDelete}>
            <Text style={[styles.optionText, { color: 'red' }]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ActionPopupModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center', // you can use 'flex-end' for bottom
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  popup: {
    position: 'absolute',

    width: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    elevation: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 16,
  },
});
