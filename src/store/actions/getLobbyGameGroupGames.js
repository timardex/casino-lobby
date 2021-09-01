import Service from "../service";
import api from "../service/api";

const getLobbyGameGroupGames = () => {
  return async function(dispatch) {
    try {
      const data = await Service.getRequest(`${api}getLobbyGameGroupGames?languageId=en`);
      const action = {
        type: 'GET_LOBBY_GAME_GROUP_GAMES',
        payload: data,
      };
      dispatch(action);
    } catch(error) {
      const action = {
        type: 'GET_LOBBY_GAME_GROUP_GAMES',
        payload: error,
      }
      dispatch(action);
    }
  };
};

export default getLobbyGameGroupGames;