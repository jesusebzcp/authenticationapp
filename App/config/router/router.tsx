import React, {useContext, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Context} from '@/core/StoreContext';
import {StoreContextUI} from '@/core/entity';

import {getUser} from '@/core/auth/actions';

import {screens} from './screens';

const Stack = createNativeStackNavigator();

export const Router = () => {
  const {state, authDispatch}: StoreContextUI = useContext(Context);

  const {authState} = state;
  const {user} = authState;

  const renderScreens = useMemo(() => {
    return user ? screens.private : screens.public;
  }, [user]);

  useEffect(() => {
    getUser(authDispatch);
  }, [authDispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        {renderScreens.map((props, index) => (
          <Stack.Screen key={`index-${index}`} {...props} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
