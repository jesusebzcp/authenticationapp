import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {Header} from '@/components/Header';
import {FormLogin} from './FormLogin';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FormLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
