import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import Button from '../../ui/Button';
import { LogoIcon } from '../../assets/icons';
import { useAuthStore } from '../../store/auth/auth.store';

const SignUpScreen = () => {
  const { navigate } = useNavigation<any>();

  const { authSignUp } = useAuthStore((state) => state.actions);

  const formik = useFormik({
    initialValues: {
      full_name: '',
      email: '',
      password: '',
    },
    // validationSchema: Yup.object().shape({
    //   email: Yup.string().email('Invalid email').required('Email is required'),
    //   password: Yup.string().min(6, 'Too short').required('Password is required'),
    // }),
    onSubmit: async (values) => {
      console.log('Form submitted:', values);

      const response = await authSignUp(values);
      if (response?.result) {
        navigate('SignIn');
      } else {
        Alert.alert(
          'Error',
          'An error occurred while signing up. Please try again.'
        );
      }
      // Add your sign-in logic here
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <LogoIcon />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Full name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          placeholderTextColor="#888"
          onChangeText={formik.handleChange('full_name')}
          onBlur={formik.handleBlur('full_name')}
          value={formik.values.full_name}
          autoCapitalize="none"
        />
        {formik.touched.full_name && formik.errors.full_name && (
          <Text style={styles.error}>{formik.errors.full_name}</Text>
        )}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="#888"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={styles.error}>{formik.errors.email}</Text>
        )}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="#888"
          secureTextEntry
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}
      </View>

      <View style={styles.buttonGroup}>
        <Button title="Register" onPress={formik.handleSubmit} />
        <Button
          title="Sign In"
          onPress={() => {
            navigate('SignIn');
          }}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  form: {
    marginTop: 20,
  },
  label: {
    color: '#fff',
    marginBottom: 6,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#fff',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  error: {
    color: '#FF6B6B',
    marginBottom: 8,
    fontSize: 13,
  },
  buttonGroup: {
    marginTop: 20,
    gap: 12,
  },
});
