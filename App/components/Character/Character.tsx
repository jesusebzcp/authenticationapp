import type {Characters} from '@/core/characters/entity';
import {Colors, Metrics} from '@/theme';
import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppText} from '../AppText';

interface CharacterProps {
  item: Characters;
  onPress: () => void;
}

export const Character = ({item, onPress}: CharacterProps) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <FastImage
        style={styles.image}
        source={{
          uri: item.image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <AppText.H6
        text={item.name}
        numberOfLines={1}
        style={styles.nameCharacter}
      />
      <AppText.P
        text={`Episodes ${item.episode.length}`}
        numberOfLines={1}
        style={styles.episodes}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 10,
    flex: 1,
    width: Metrics.screenWidth * 0.5,
    height: Metrics.screenHeight * 0.2,
  },
  image: {
    width: Metrics.screenWidth * 0.5,
    height: Metrics.screenHeight * 0.2,
    borderRadius: 8,
    marginBottom: 10,
  },
  episodes: {
    color: Colors.gray,
  },
  nameCharacter: {
    maxWidth: '90%',
  },
});
