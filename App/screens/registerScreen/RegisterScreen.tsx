import {Header} from '@/components/Header';
import * as React from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import {FormRegister} from './FormRegister';

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <FormRegister />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});
