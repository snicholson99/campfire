import React from 'react';
import './fire.css';

const Fire = () => {
  return (
    <div className="fire">
      <div className="log log-front" />
      <div className="log log-rear" />
      <div className="log log-bottom" />
      <div className="flame flame-outer" />
      <span className="smoke">React</span>
      <span className="smoke smoke-2">SCSS</span>
      <span className="smoke smoke-3">JavaScript</span>
    </div>
  );
}

export default Fire;