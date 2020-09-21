import {useQuery} from '@apollo/client';

import {
  SEARCH_EPISODES_QUERY,
  SEARCH_LOCATIONS_QUERY,
  SEARCH_CHARS_QUERY,
} from '../Apollo/queries';

export const useFetchEntities = (entity, variables) => {
  let query;
  switch (entity) {
    case 'EPISODES':
      query = SEARCH_EPISODES_QUERY;
      break;
    case 'LOCATIONS':
      query = SEARCH_LOCATIONS_QUERY;
      break;
    default:
      query = SEARCH_CHARS_QUERY;
  }

  return useQuery(query, {
    variables,
  });
};
