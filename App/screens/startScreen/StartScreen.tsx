import React from 'react';
import {StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';

import {Colors, Metrics} from '@/theme';
import {AppText} from '@/components/AppText';
import {Button} from '@/components/Buttons';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/config/router/entitys';

export const StartScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Lottie source={require('./startAnimation.json')} autoPlay loop />
      </View>
      <View style={styles.body}>
        <AppText.H1 text={"let's start"} />
        <AppText.DESCRIPTION text={"let's try this adventure"} />
      </View>
      <View style={styles.footer}>
        <Button
          text="I already have an account"
          onPress={() => handleNavigation('LoginScreen')}
        />
        <Button
          text="to register"
          type="white"
          onPress={() => handleNavigation('RegisterScreen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.addHeader,
    paddingBottom: Metrics.addHeader,
  },
  title: {
    color: Colors.dark,
    fontSize: 48,
    fontWeight: 'bold',
  },
  header: {
    flex: 2.8,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  body: {flex: 1.5, paddingHorizontal: 20},
  footer: {
    justifyContent: 'space-between',
    flex: 1.3,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
