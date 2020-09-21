import React from 'react';
import {StyleSheet} from 'react-native';
import {View, H1, Text} from 'native-base';

import {DefaultCard} from './DefaultCard';

export const TextCard = ({title, description}) => (
  <DefaultCard>
    <View style={styles.cardContent}>
      <H1 style={{...styles.text}}>{title}</H1>
      <Text style={{...styles.text}}>{description}</Text>
    </View>
  </DefaultCard>
);

const styles = StyleSheet.create({
  cardContent: {
    flex: 1,
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
    marginVertical: 5,
  },
});
