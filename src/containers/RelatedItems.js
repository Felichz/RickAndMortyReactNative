import React from 'react';
import {EntityItem} from './EntityItem';

export const RelatedItems = ({entity, array, onPressItem = () => {}}) => {
  switch (entity) {
    case 'CHARACTERS':
      return array.map((item) => (
        <EntityItem
          key={item.id}
          entity={entity}
          data={{
            imgUri: item.image,
            title: item.name,
          }}
          onPress={() => onPressItem(item.id, entity)}
        />
      ));
    case 'LOCATIONS':
      return array.map((item) => (
        <EntityItem
          key={item.id}
          entity={entity}
          data={{
            title: item.name,
            description: item.dimension,
          }}
          onPress={() => onPressItem(item.id, entity)}
        />
      ));
    case 'EPISODES':
      return array.map((item) => (
        <EntityItem
          key={item.id}
          entity={entity}
          data={{
            title: item.name,
            description: item.episode,
          }}
          onPress={() => onPressItem(item.id, entity)}
        />
      ));
  }
};
