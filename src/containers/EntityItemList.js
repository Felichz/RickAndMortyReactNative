import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {H1} from 'native-base';

import {useFetchEntities} from '../hooks/useFetchEntities';
import {Loader} from '../components/Loader';
import {EntityItem} from './EntityItem';
import {Paginator} from '../components/Paginator';

export const EntityItemList = ({
  entity,
  searchValues,
  onPressItem = () => {},
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [searchValues]);

  function handlePageChange(pageNumber) {
    setPage(pageNumber);
  }

  const queryVariables = {
    name: '',
    type: '',
    page,
    ...searchValues,
  };

  console.log('queryVariables', queryVariables);

  const {data, loading, error} = useFetchEntities(entity, queryVariables);

  console.log(data);
  console.log(error);

  if (loading) {
    return <Loader style={styles.loader} />;
  }

  if (error && !data) {
    if (error.message === '404: Not Found') {
      return <H1>No items found</H1>;
    }

    return <H1>An error has ocurred</H1>;
  }

  const array = data.data.results;
  const info = data.data.info;

  let items;
  switch (entity) {
    case 'CHARACTERS':
      items = array.map((item) => (
        <EntityItem
          key={item.id}
          entity={entity}
          data={{
            imgUri: item.image,
            title: item.name,
          }}
          onPress={() => onPressItem(item.id)}
        />
      ));
      break;
    case 'LOCATIONS':
      items = array.map((item) => (
        <EntityItem
          key={item.id}
          entity={entity}
          data={{
            title: item.name,
            description: item.dimension,
          }}
          onPress={() => onPressItem(item.id)}
        />
      ));
      break;
    case 'EPISODES':
      items = array.map((item) => (
        <EntityItem
          key={item.id}
          entity={entity}
          data={{
            title: item.name,
            description: item.episode,
          }}
          onPress={() => onPressItem(item.id)}
        />
      ));
  }

  return (
    <>
      <Paginator
        pages={info.pages}
        active={info.prev + 1}
        maxButtons={6}
        onPageChange={handlePageChange}
      />
      {items}
    </>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginTop: 50,
  },
});
