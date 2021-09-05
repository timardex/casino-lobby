import React from 'react';

const Error = (props) => {
  const { error } = props;
  return (
    <ul>
      {Object.entries(error).map(item => {
        return <li key={item[0]}>
          <u>{item[0]}: </u>
          <span>{item[1]}</span>
        </li>
      })}
    </ul>
  );
};

export default Error;