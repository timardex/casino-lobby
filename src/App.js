import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLobbyListWithGameGroups, getLobbyGameGroupGames } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  
  const lobbyListWithGameGroups = useSelector(state => state.lobbyListWithGameGroups) || [];
  const lobbyGameGroupGames = useSelector(state => state.lobbyGameGroupGames) || [];

  useEffect(() => {
    dispatch(getLobbyGameGroupGames());
    dispatch(getLobbyListWithGameGroups());
  }, [dispatch]);

  const renderList = (listType) => {
    if(lobbyListWithGameGroups.length > 0) {
      const { gameGroupList } = lobbyListWithGameGroups.find(el => el.name === listType);
      
      const lobby = gameGroupList.map(list => {
        const { name, id, game_group_order } = list;
        const games = lobbyGameGroupGames.filter(game => game.gameGroupList.some(item => item.id === id));
        return { name, id, game_group_order, games };
      });
      console.log(lobby);

      return (
        <div>
          <ul className="lobby-list">
            {lobby.sort((a, b) => b.game_group_order - a.game_group_order).map(item => {
              return <li key={item.id} className="lobby-item">
                <span className="lobby-title">{item.name}</span>
                <ul className="game-list">
                  {item.games.map(game => {
                    return <li key={game.gameCode} className="game-item">{game.name}</li>
                  })}
                </ul>
              </li>
            })}
          </ul>
        </div>
      );
    }
    
    return 'Loading ...';
  }

  return (
    <div className="App">
      {renderList('casino')}
    </div>
  );
}

export default App;
