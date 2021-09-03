export const GET_LOBBY_LIST_WITH_GAME_GROUPS = (state, action) => {
  return {
    ...state,
    lobbyListWithGameGroups: action.payload,
    lobbyNames: action.payload.length > 0 ? action.payload.map(el => el.name) : [],
    error: action.error,
  };
};
