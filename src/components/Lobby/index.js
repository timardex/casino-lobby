import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const Lobby = (props) => {
  const { lobbyType } = props;

  const lobbyListWithGameGroups = useSelector(state => state.lobbyListWithGameGroups) || [];
  const lobbyGameGroupGames = useSelector(state => state.lobbyGameGroupGames) || [];

  const renderLobby = () => {
    if(lobbyListWithGameGroups.length > 0) {
      const { gameGroupList } = lobbyListWithGameGroups.find(el => el.name === lobbyType);
      
      const lobby = gameGroupList.map(list => {
        const { name, id, game_group_order } = list;
        const games = lobbyGameGroupGames.filter(game => game.gameGroupList.some(item => item.id === id));
        return { name, id, game_group_order, games };
      });
      console.log(lobby);
      return lobby;
    }
    
    return [];
  }

  return (
    <div className="lobby">
      <h1>{ lobbyType }</h1>
      <ul className="lobby-list">
        {renderLobby().sort((a, b) => b.game_group_order - a.game_group_order).map(item => {
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
};

export default Lobby;