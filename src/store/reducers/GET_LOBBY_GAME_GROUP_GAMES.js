export const GET_LOBBY_GAME_GROUP_GAMES = (state, action) => {
  return {
    ...state,
    lobbyGameGroupGames: action.payload,
  };
};
