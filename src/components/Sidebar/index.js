import React from 'react';
import './style.scss';

const Sidebar = (props) => {
  const { lobbyNames, setLobby, lobby } = props;
  return (
    <div id="sidebar">
      <div className="inner">
        <ul>
          {lobbyNames.map((name, index) => {
            return <li className={index === lobby ? 'active' : ''} key={index} onClick={() => setLobby(index)}>
              {name}
            </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
