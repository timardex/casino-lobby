import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Lobby from './components/Lobby';
import Sidebar from './components/Sidebar';

import './App.scss';

import { getLobbyListWithGameGroups, getLobbyGameGroupGames } from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  const lobbyListWithGameGroups = useSelector(state => state.lobbyListWithGameGroups) || [];
  const lobbyNames = lobbyListWithGameGroups.map(el => el.name);
  console.log(lobbyNames)

  useEffect(() => {
    dispatch(getLobbyGameGroupGames());
    dispatch(getLobbyListWithGameGroups());
  }, [dispatch]);

  return (
    <div className="App">
      <Sidebar lobbyNames={lobbyNames}/>
      <Lobby lobbyType={"casino"}/>
    </div>
  );
}

export default App;
