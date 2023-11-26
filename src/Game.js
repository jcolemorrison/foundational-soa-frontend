import React, { useState, useEffect } from 'react';
import './Game.css';
import Upstreams from './Upstreams';
// import testData from './test.json';

const Game = () => {
  const [fetchedData, setData] = useState([]);

  useEffect(() => {
    fetch('https://ecs.hashidemo.com')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='game-container'>
      <Upstreams upstreams={{'upstream_calls': { 'root': fetchedData } } } />
    </div>
  );
};

export default Game