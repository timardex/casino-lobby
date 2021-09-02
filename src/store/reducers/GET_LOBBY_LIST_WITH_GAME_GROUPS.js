export const GET_LOBBY_LIST_WITH_GAME_GROUPS = (state, action) => {
  return {
    ...state,
    lobbyListWithGameGroups: action.payload,
    error: action.error,
  };
};
