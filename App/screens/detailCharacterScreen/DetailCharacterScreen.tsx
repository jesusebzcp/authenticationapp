import {AppText} from '@/components/AppText';
import {ButtonBack} from '@/components/Buttons';
import {Characters} from '@/core/characters/entity';
import {Colors, Metrics} from '@/theme';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export const DetailCharacterScreen = () => {
  const route = useRoute<
    RouteProp<
      {
        params: {
          character: Characters;
        };
      },
      'params'
    >
  >();

  const character = route.params.character;

  return (
    <View style={styles.container}>
      <View>
        <ButtonBack customStyles={styles.buttonBack} />
        <FastImage
          source={{
            uri: character.image,
          }}
          style={styles.img}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <ScrollView style={styles.body}>
        <AppText.H6 text={character.name} />
        <View>
          <View style={styles.col}>
            <View style={styles.tag}>
              <AppText.LABEL
                text={`Stats: ${character.status}`}
                style={styles.textTag}
              />
            </View>
            <View style={styles.tag}>
              <AppText.LABEL
                text={`Gender: ${character.gender}`}
                style={styles.textTag}
              />
            </View>
            <View style={styles.tag}>
              <AppText.LABEL
                text={`Species: ${character.species}`}
                style={styles.textTag}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * 0.3,
  },
  buttonBack: {
    top: 10,
  },
  body: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  col: {
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  tag: {
    backgroundColor: Colors.secondary,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  textTag: {
    color: Colors.light,
  },
});
