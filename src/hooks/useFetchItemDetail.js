import {useQuery} from '@apollo/client';

import {GET_EPISODE, GET_LOCATION, GET_CHAR} from '../Apollo/queries';

export const useFetchItemDetail = (entity, variables) => {
  let query;
  switch (entity) {
    case 'EPISODES':
      query = GET_EPISODE;
      break;
    case 'LOCATIONS':
      query = GET_LOCATION;
      break;
    default:
      query = GET_CHAR;
  }

  return useQuery(query, {
    variables,
  });
};
