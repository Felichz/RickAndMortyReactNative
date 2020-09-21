import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';

import {Header} from '../components/Header';
import {SearchFields} from '../containers/SearchFields';
import {EntityItemList} from '../containers/EntityItemList';

export const EntityScreen = ({entity, navigation}) => {
  const [searchValues, setSearchValues] = useState({});

  function handlePressItem(id) {
    navigation.navigate('Detail', {
      entity,
      id,
    });
  }

  return (
    <Container>
      <Header>
        <SearchFields
          entity={entity}
          onSearch={(values) => setSearchValues(values)}
        />
      </Header>
      <Content contentContainerStyle={styles.content}>
        <EntityItemList
          entity={entity}
          searchValues={searchValues}
          onPressItem={handlePressItem}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    alignItems: 'center',
  },
});
