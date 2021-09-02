import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Lobby from './components/Lobby';
import Sidebar from './components/Sidebar';

import './App.scss';

import { getLobbyListWithGameGroups, getLobbyGameGroupGames } from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  const lobbyListWithGameGroups = useSelector(state => state.lobbyListWithGameGroups) || [];
  const lobbyGameGroupGames = useSelector(state => state.lobbyGameGroupGames) || [];

  const lobbyNames = lobbyListWithGameGroups.map(el => el.name);
  
  const [lobby, setLobby] = useState(0);

  useEffect(() => {
    dispatch(getLobbyGameGroupGames());
    dispatch(getLobbyListWithGameGroups());
  }, [dispatch]);

  return (
    <div className="App">
      <Sidebar
        lobbyNames={lobbyNames}
        setLobby={setLobby}
        lobby={lobby}/>

      <Lobby
        lobbyType={lobbyNames[lobby]}
        lobbyListWithGameGroups={lobbyListWithGameGroups}
        lobbyGameGroupGames={lobbyGameGroupGames}/>
    </div>
  );
}

export default App;
