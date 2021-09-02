import React from 'react';
import './style.scss';

const Sidebar = (props) => {
  const { lobbyNames } = props;
  return (
    <div id="sidebar">
      <div className="inner">
        <ul>
          {lobbyNames.map((name, index) => {
            return <li key={index}>{name}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
