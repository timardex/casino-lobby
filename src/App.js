import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Lobby from './components/Lobby';
import Sidebar from './components/Sidebar';
import Error from './components/Error';

import './App.scss';

import { getLobbyListWithGameGroups, getLobbyGameGroupGames } from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  const lobbyListWithGameGroups = useSelector(state => state.lobbyListWithGameGroups) || [];
  const lobbyGameGroupGames = useSelector(state => state.lobbyGameGroupGames) || [];
  const lobbyNames = useSelector(state => state.lobbyNames) || [];
  const error = useSelector(state => state.error);
  
  const [lobby, setLobby] = useState(0);

  useEffect(() => {
    dispatch(getLobbyListWithGameGroups()).then(() => {
      dispatch(getLobbyGameGroupGames());
    });
  }, [dispatch]);

  const renderComponents = () => {
    if(error === undefined) {
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
    return <Error error={error}/>
  }

  return (
    <div className="App">
      {renderComponents()}
    </div>
  );
}

export default App;
