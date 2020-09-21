import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'native-base';

import {ImgCard} from '../components/Cards/ImgCard';
import {TextCard} from '../components/Cards/TextCard';

export const EntityItem = ({entity, data, onPress = () => {}}) => {
  let Card;

  switch (entity) {
    case 'CHARACTERS':
      Card = <ImgCard imgUri={data.imgUri} title={data.title} />;
      break;
    default:
      Card = <TextCard title={data.title} description={data.description} />;
  }

  return (
    <View style={styles.centeredView}>
      <TouchableOpacity onPress={onPress} style={styles.card}>
        {Card}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    minHeight: '60%',
    minWidth: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    marginVertical: 10,
  },
});
