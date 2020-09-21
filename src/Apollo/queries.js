import {gql} from '@apollo/client';

// Search items
export const SEARCH_CHARS_QUERY = gql`
  query SearchChars($page: Int, $name: String, $type: String) {
    data: characters(page: $page, filter: {name: $name, type: $type}) {
      info {
        pages
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const SEARCH_LOCATIONS_QUERY = gql`
  query SearchLocations($page: Int, $name: String, $type: String) {
    data: locations(page: $page, filter: {name: $name, type: $type}) {
      info {
        pages
        prev
      }
      results {
        id
        name
        dimension
      }
    }
  }
`;

export const SEARCH_EPISODES_QUERY = gql`
  query SearchEpisodes($page: Int, $name: String) {
    data: episodes(page: $page, filter: {name: $name}) {
      info {
        pages
        prev
      }
      results {
        id
        name
        episode
      }
    }
  }
`;

export const GET_CHAR = gql`
  query getChar($id: ID!) {
    data: character(id: $id) {
      name
      image
      type
      gender
      species
    }
  }
`;

export const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    data: location(id: $id) {
      name
      type
      dimension
      residents {
        id
        image
        name
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    data: episode(id: $id) {
      name
      air_date
      episode
      characters {
        id
        image
        name
      }
    }
  }
`;
