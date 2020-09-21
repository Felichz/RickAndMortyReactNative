import React from 'react';
import {Container, Content} from 'native-base';

import {ItemDetail} from '../containers/ItemDetail';

export const DetailScreen = ({navigation, route}) => {
  const {entity, id} = route.params;

  function handlePressRelatedItem(pressedItemId, pressedItemEntity) {
    navigation.push('Detail', {
      entity: pressedItemEntity,
      id: pressedItemId,
    });
  }

  return (
    <Container>
      <Content>
        <ItemDetail
          entity={entity}
          id={id}
          onPressRelatedItem={handlePressRelatedItem}
        />
      </Content>
    </Container>
  );
};
