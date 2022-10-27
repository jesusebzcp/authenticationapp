import Geolocation from '@react-native-community/geolocation';
import * as React from 'react';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

export const useGeolocation = () => {
  const [geolocation, setGeolocation] = React.useState({
    lat: 0.1,
    lng: 0.1,
  });

  const [watchIdGeo, setWatchIdGeo] = React.useState(0);

  const clearLocation = React.useCallback(() => {
    Geolocation.clearWatch(watchIdGeo);
  }, [watchIdGeo]);

  const getLocation = () => {
    Platform.OS === 'ios' && Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setGeolocation({
          lat,
          lng,
        });
      },
      error => console.log(JSON.stringify(error)),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );

    const watchId = Geolocation.watchPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setGeolocation({
        lat,
        lng,
      });
    });
    setWatchIdGeo(watchId);
  };
  const handleGeolocation = React.useCallback(async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      getLocation();
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permisos de geolocation',
          message:
            'Necesitamos acceder a tus coordenadas para acceder a esta función',
          buttonNeutral: 'Preguntarme después',
          buttonPositive: 'OK',
          buttonNegative: 'Cancelar',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        Alert.alert('Ups...', 'Permisos denegados.');
      }
    }
  }, []);

  React.useEffect(() => {
    handleGeolocation();
  }, [handleGeolocation]);

  return {
    geolocation,
    watchIdGeo,
    clearLocation,
  };
};
