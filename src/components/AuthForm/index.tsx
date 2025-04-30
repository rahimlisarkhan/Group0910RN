import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';

const AuthForm = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isIOS = Platform.OS === 'ios';

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : 'height'}
      style={[styles.container, isDarkMode && styles.container_dark]}
    >
      <Text>AuthForm</Text>
      <Text>AuthForm2</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>
      <Text>AuthForm3</Text>

      <TextInput
        placeholder="Username"
        // multiline
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: isIOS ? 10 : 0,
          width: '80%',
          backgroundColor: isDarkMode ? 'black' : 'white',
          color: isDarkMode ? 'white' : 'black',
        }}
      />
      <TouchableOpacity
        onPress={() => setIsDarkMode(!isDarkMode)}
        style={{
          backgroundColor: isDarkMode ? 'black' : 'white',
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>
          Toggle Dark Mode
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
  },

  container_dark: {
    backgroundColor: 'yellow',
  },

  text: {
    // fontSize: Platform.OS == "ios" ? 20 : 16,
    fontSize: Platform.select({
      ios: 20,
      android: 16,
    }),
    fontFamily: 'Arial',
    fontWeight: '500',
  },
});
