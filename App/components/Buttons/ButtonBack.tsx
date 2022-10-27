import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Colors, Metrics} from '@/theme';
import {SvgBackIcon} from '@/assets/svg/SvgBackIcon';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/config/router/entitys';

const SIZE = 36;

interface ButtonBackProps {
  customStyles?: {};
}

export const ButtonBack = ({customStyles}: ButtonBackProps) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <TouchableOpacity
      style={[styles.button, customStyles]}
      onPress={() => navigation.goBack()}>
      <SvgBackIcon />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: Metrics.addHeader + 20,
    zIndex: 1,
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    left: 20,
  },
});
