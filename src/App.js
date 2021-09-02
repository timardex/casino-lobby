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
  const error = useSelector(state => state.error);

  const lobbyNames = lobbyListWithGameGroups.map(el => el.name);
  
  const [lobby, setLobby] = useState(0);

  useEffect(() => {
    dispatch(getLobbyGameGroupGames());
    dispatch(getLobbyListWithGameGroups());
  }, [dispatch]);

  const renderComponents = () => {
    if(typeof error !== undefined) {
      return (
        <div>
          <Sidebar
            lobbyNames={lobbyNames}
            setLobby={setLobby}
            lobby={lobby}/>

          <Lobby
            lobbyType={lobbyNames[lobby]}
            lobbyListWithGameGroups={lobbyListWithGameGroups}
            lobbyGameGroupGames={lobbyGameGroupGames}/>
        </div>
      )
    }
    return 'Something went wrong';
  }

  return (
    <div className="App">
      {renderComponents()}
    </div>
  );
}

export default App;
