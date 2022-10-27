import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import {INITIAL_VALUES_REGISTER} from '@/screens/registerScreen/FormRegister';
import {generateUrlServer} from '@/utilities';
import {KEYS} from '@/keys';

import {LOADING, SET_USER} from './types';

export const setLoading = (loading: boolean, dispatch: any) => {
  dispatch({
    type: LOADING,
    payload: loading,
  });
};

export const registerDispatch = async (
  values: typeof INITIAL_VALUES_REGISTER,
  dispatch: any,
) => {
  try {
    setLoading(true, dispatch);
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${KEYS.TOKEN}`);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(values),
      redirect: 'follow',
    };
    const response = await fetch(
      generateUrlServer('/auth/register'),
      requestOptions,
    );

    if (response.status === 200) {
      const json = await response.json();
      await AsyncStorage.setItem('token', json.access_token);
      await getUser(dispatch);
    }
  } catch (error) {
    console.log('error:registerDispatch', error);
    Toast.show({
      type: 'error',
      text1: 'Ups...',
      text2: 'Ocurrió un error',
    });
  } finally {
    setLoading(false, dispatch);
  }
};

export const getUser = async dispatch => {
  try {
    setLoading(true, dispatch);
    const token = await AsyncStorage.getItem('token');

    if (!token) {
      return;
    }

    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${KEYS.TOKEN}`);
    myHeaders.append('x-token', token);
    const response = await fetch(generateUrlServer('/auth/user'), {
      headers: myHeaders,
    });

    if (response.status === 200) {
      const json = await response.json();
      dispatch({type: SET_USER, payload: json.user});
    }
  } catch (error) {
  } finally {
    setLoading(false, dispatch);
  }
};

export const loginDispatch = async (
  values: {email: string; password: string},
  dispatch,
) => {
  try {
    setLoading(true, dispatch);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(values),
      redirect: 'follow',
    };
    const response = await fetch(
      generateUrlServer('/auth/login'),
      requestOptions,
    );
    if (response.status === 200) {
      const json = await response.json();
      await AsyncStorage.setItem('token', json.access_token);
      await getUser(dispatch);
    }
  } catch (error) {
  } finally {
    setLoading(false, dispatch);
  }
};

export const singOutDispatch = async dispatch => {
  await AsyncStorage.removeItem('token');
  dispatch({
    type: SET_USER,
    payload: null,
  });
};
