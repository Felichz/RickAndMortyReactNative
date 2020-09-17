import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, View, Text, Item, Input, Icon} from 'native-base';

export const EntityScreen = ({entity}) => {
  return (
    <Container>
      <View style={styles.header}>
        <Item regular style={{...styles.searchBox}}>
          <Icon active type="MaterialIcons" name="search" />
          <Input placeholder="Search by name" style={{...styles.searchInput}}/>
        </Item>
        <Item regular style={{...styles.searchBox}}>
          <Icon active type="MaterialIcons" name="search" />
          <Input placeholder="Search by type" style={{...styles.searchInput}}/>
        </Item>
      </View>
      <Content style={styles.content}>
        <Text>{entity} screen</Text>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#3498db',
  },
  searchBox: {
    borderRadius: 5,
    marginVertical: 3,
    backgroundColor: 'white',
  },
  searchInput: {
    fontSize: 15,
    height: 40
  }
});