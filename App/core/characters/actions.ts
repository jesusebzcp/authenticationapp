import Toast from 'react-native-toast-message';
import {GET_CHARACTERS, LOADING} from './types';

import {generateUrlRickAndMorty} from '@/utilities';

export const setLoading = (loading: boolean, dispatch: any) => {
  dispatch({
    type: LOADING,
    payload: loading,
  });
};

export const getCharactersDispatch = async (dispatch: any) => {
  try {
    setLoading(true, dispatch);
    const response = await fetch(generateUrlRickAndMorty('/character'));

    if (response.status === 200) {
      const json = await response.json();

      dispatch({
        type: GET_CHARACTERS,
        payload: json.results,
      });
    }
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Ups...',
      text2: 'Ocurrió un error al intentar traer los reportes',
    });
  } finally {
    setLoading(false, dispatch);
  }
};
