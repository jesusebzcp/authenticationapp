import React, {useContext, useMemo} from 'react';
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

import {useGeolocation} from '@/hooks/useGeolocation/useGeolocation';

import {Input} from '@/components/Input';
import {Button} from '@/components/Buttons';
import {Context} from '@/core/StoreContext';
import {StoreContextUI} from '@/core/entity';
import {registerDispatch} from '@/core/auth/actions';
import {Metrics} from '@/theme';

export const INITIAL_VALUES_REGISTER = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  location: {
    lat: 0,
    lng: 0,
  },
  dateOfBirth: new Date(),
};

export const FormRegister = () => {
  const {state, authDispatch}: StoreContextUI = useContext(Context);
  const {authState} = state;
  const {loading} = authState;

  const {geolocation} = useGeolocation();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('El numero de documento es obligatorio.')
      .email('El email es invalido'),
    password: Yup.string()
      .required('El password es obligatorio.')
      .min(6, 'La contraseña debe ser de al menos 6 caracteres'),
    firstName: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El segundo nombre es obligatorio'),
    dateOfBirth: Yup.string().required('La fecha de nacimiento es obligatoria'),
  });

  const Form = withNextInputAutoFocusForm(View);

  const handleOnSubmit = (values: typeof INITIAL_VALUES_REGISTER) => {
    registerDispatch(
      {
        ...values,
        location: geolocation,
      },
      authDispatch,
    );
  };

  const formValues = useMemo(() => {
    return [
      {
        label: 'FirstName',
        placeholder: 'Enter your name',
        name: 'firstName',
      },
      {
        label: 'LastName',
        placeholder: 'Enter your last name',
        name: 'lastName',
      },
      {
        label: 'Date of Birth',
        placeholder: 'Enter your date of birth',
        name: 'dateOfBirth',
        type: 'date',
      },
      {
        label: 'Email',
        placeholder: 'Enter your email',
        name: 'email',
      },
      {
        label: 'Password',
        placeholder: 'Enter your password',
        name: 'password',
      },
    ];
  }, []);

  return (
    <Formik
      initialValues={INITIAL_VALUES_REGISTER}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}>
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
            style={{height: Metrics.screenHeight}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={-Metrics.screenHeight * 0.4}>
            {formValues.map(props => (
              <Input
                key={`index-${props.name}`}
                label={props.label}
                placeholder={props.placeholder}
                onChangeText={handleChange(props.name)}
                onBlur={() => setFieldTouched(props.name)}
                value={values[props.name]}
                error={errors[props.name]}
                type={props.type as 'date'}
              />
            ))}
            <View style={styles.footer}>
              <Button
                text="Register"
                disabled={!isValid}
                onPress={handleSubmit}
                loading={loading}
              />
            </View>
          </KeyboardAvoidingView>
        </Form>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
  footer: {
    paddingVertical: 20,
  },
});
