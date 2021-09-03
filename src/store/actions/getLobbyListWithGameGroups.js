import Service from "../service";
import api from "../service/api";

const getLobbyListWithGameGroups = () => {
  return async function(dispatch) {
    try {
      const data = await Service.getRequest(`${api}getLobbyListWithGameGroups?languageId=en`);
      const action = {
        type: 'GET_LOBBY_LIST_WITH_GAME_GROUPS',
        payload: data,
        error: Object.keys(data).includes('is_IpBlocked') ? data.Desc : undefined,
      };
      dispatch(action);
    } catch(error) {
      const action = {
        type: 'GET_LOBBY_LIST_WITH_GAME_GROUPS',
        payload: [],
        error,
      }
      dispatch(action);
    }
  };
};

export default getLobbyListWithGameGroups;
