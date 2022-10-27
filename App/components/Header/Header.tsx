import React from 'react';
import {StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {ButtonBack} from '@/components/Buttons';
import {Colors, Metrics} from '@/theme';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Lottie source={require('./loginAnimation')} autoPlay loop />
      <ButtonBack />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    minHeight: Metrics.screenHeight * 0.15,
  },
});
