import * as React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {Colors} from '@/theme';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
