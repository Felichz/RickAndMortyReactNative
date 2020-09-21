import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {H1} from 'native-base';

import {DefaultCard} from './DefaultCard';

export const ImgCard = ({imgUri, title}) => (
  <DefaultCard>
    <Image style={styles.image} source={{uri: imgUri}} />
    <H1 style={styles.title}>{title}</H1>
  </DefaultCard>
);

const styles = StyleSheet.create({
  image: {width: 100, height: 100},
  title: {
    flex: 1,
    textAlign: 'center',
  },
});
