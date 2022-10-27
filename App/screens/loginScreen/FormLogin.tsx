import React, {useCallback, useContext} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import * as Yup from 'yup';
import {Formik} from 'formik';
import {withNextInputAutoFocusForm} from 'react-native-formik';

import {AppText} from '@/components/AppText';
import {Input} from '@/components/Input';
import {Button} from '@/components/Buttons';
import {loginDispatch} from '@/core/auth/actions';
import {Context} from '@/core/StoreContext';
import {StoreContextUI} from '@/core/entity';
import {Metrics} from '@/theme';

export const INITIAL_VALUES_LOGIN = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required('El numero de documento es obligatorio.')
    .email('El email es invalido'),
  password: Yup.string()
    .required('El password es obligatorio.')
    .min(6, 'La contraseña debe ser de al menos 6 caracteres'),
});

export const FormLogin = () => {
  const {state, authDispatch}: StoreContextUI = useContext(Context);

  const {authState} = state;
  const {loading} = authState;
  const Form = withNextInputAutoFocusForm(View);

  const onSubmit = useCallback(
    (values: typeof INITIAL_VALUES_LOGIN) => {
      loginDispatch(values, authDispatch);
    },
    [authDispatch],
  );

  return (
    <Formik
      initialValues={INITIAL_VALUES_LOGIN}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({
        handleChange,
        values,
        setFieldTouched,
        errors,
        isValid,
        handleSubmit,
      }) => (
        <Form
          style={styles.container}
          onStartShouldSetResponder={() => true}
          onResponderGrant={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <AppText.H4 text={'log in to continue'} style={styles.title} />
            <Input
              label="Email"
              placeholder="Ingrese tu email"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              value={values.email}
              error={errors.email}
            />
            <Input
              label="Contraseña"
              placeholder="Ingrese tu contraseña"
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              value={values.password}
              error={errors.password}
              type={'password'}
            />
          </KeyboardAvoidingView>
          <View>
            <Button
              loading={loading}
              text="Login"
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        </Form>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: Metrics.addHeader + 20,
  },
  title: {
    paddingBottom: 20,
  },
});
