import React from 'react';
import {ScrollView, StyleSheet, Image} from 'react-native';
import {View, Text, H1, H3, List, ListItem} from 'native-base';

import {useFetchItemDetail} from '../hooks/useFetchItemDetail';
import {Loader} from '../components/Loader';
import {RelatedItems} from './RelatedItems';

export const ItemDetail = ({entity, id, onPressRelatedItem = () => {}}) => {
  const {data, loading, error} = useFetchItemDetail(entity, {id});

  if (loading) {
    return <Loader style={styles.loader} />;
  }

  if (error) {
    return <H1>An error has ocurred</H1>;
  }

  const itemData = data.data;
  let imgUri;
  let title;
  let properties;
  let relatedTitle;
  let related;

  switch (entity) {
    case 'CHARACTERS':
      imgUri = itemData.image;
      title = itemData.name;
      properties = {
        gender: itemData.gender,
        species: itemData.species,
      };
      break;
    case 'LOCATIONS':
      title = itemData.name;
      properties = {
        type: itemData.type,
        dimension: itemData.dimension,
      };
      relatedTitle = 'Some residents';
      related = {
        entity: 'CHARACTERS',
        array: itemData.residents.slice(0, 5),
      };

      break;
    case 'EPISODES':
      title = itemData.name;
      properties = {
        'release date': itemData.air_date,
        episode: itemData.episode,
      };
      relatedTitle = 'Some characters of this episode';
      related = {
        entity: 'CHARACTERS',
        array: itemData.characters.slice(0, 5),
      };
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {imgUri && <Image style={styles.image} source={{uri: imgUri}} />}
        <H1 style={styles.title}>{title}</H1>

        <List style={styles.dataList}>
          <ListItem itemDivider style={styles.listTitle}>
            <H3>Properties</H3>
          </ListItem>
          {Object.entries(properties).map(([key, value]) => (
            <ListItem key={key}>
              <Text>
                {UppercaseFirst(key)}: {value}
              </Text>
            </ListItem>
          ))}
        </List>

        {related && related.array.length && (
          <>
            <H3 style={styles.relatedTitle}>{relatedTitle || 'Related'}</H3>
            <RelatedItems {...related} onPressItem={onPressRelatedItem} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginTop: 50,
  },
  container: {
    margin: 10,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: '80%',
    aspectRatio: 1,
    resizeMode: 'contain',
    margin: 10,
    borderRadius: 1,
  },
  title: {
    textAlign: 'center',
  },
  dataList: {
    minWidth: '80%',
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#badaf6',
  },
  listTitle: {
    backgroundColor: '#badaf6',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  relatedTitle: {
    marginVertical: 10,
  },
});
function UppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
