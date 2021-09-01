import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLobbyListWithGameGroups, getLobbyGameGroupGames } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  
  const lobbyListWithGameGroups = useSelector(state => state.lobbyListWithGameGroups);
  const lobbyGameGroupGames = useSelector(state => state.lobbyGameGroupGames);

  useEffect(() => {
    dispatch(getLobbyGameGroupGames());
    dispatch(getLobbyListWithGameGroups());
  }, [dispatch]);

  return (
    <div className="App">
      {lobbyGameGroupGames}
      {lobbyListWithGameGroups}
    </div>
  );
}

export default App;
