import { GET_LOBBY_LIST_WITH_GAME_GROUPS } from './GET_LOBBY_LIST_WITH_GAME_GROUPS';
import { GET_LOBBY_GAME_GROUP_GAMES } from './GET_LOBBY_GAME_GROUP_GAMES';

const reducers = (state= {}, action) => {
  switch(action.type) {
    case 'GET_LOBBY_LIST_WITH_GAME_GROUPS':
      return GET_LOBBY_LIST_WITH_GAME_GROUPS(state, action);
    case 'GET_LOBBY_GAME_GROUP_GAMES':
      return GET_LOBBY_GAME_GROUP_GAMES(state, action);
    default:
      return state;
  };
};

export default reducers;