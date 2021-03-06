import React from 'react';
import './style.scss';

const Lobby = (props) => {
  const { lobbyType, lobbyListWithGameGroups, lobbyGameGroupGames } = props;

  const renderLobby = () => {
    const checkGroups = lobbyListWithGameGroups.length > 0 && lobbyGameGroupGames.length > 0;
    if(checkGroups) {
      const { gameGroupList } = lobbyListWithGameGroups.find(el => el.name === lobbyType);
      
      const lobby = gameGroupList.map(list => {
        const { name, id, game_group_order } = list;
        const games = lobbyGameGroupGames.filter(game => game.gameGroupList.some(group => group.id === id));
        return { name, id, game_group_order, games };
      }).sort((a, b) => b.game_group_order - a.game_group_order);
      
      return lobby;
    }
    return [];
  }

  return (
    <div className="lobby">
      <h1>{ lobbyType }</h1>
      <ul className="lobby-list">

        {renderLobby().map(item => {
          return <li key={item.id} className="lobby-item">
            <span className="lobby-title">{item.name}</span>

            <ul className="game-list">

              {item.games.length > 0 ? item.games.map(game => {
                return <li key={game.gameCode} className="game-item">
                  {game.name}
                </li>
              }) : 'No Games'}

            </ul>

          </li>
        })}

      </ul>
    </div>
  );
};

export default Lobby;