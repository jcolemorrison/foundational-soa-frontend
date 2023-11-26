import React from 'react';
import './Upstreams.css';
import Globe from './icons/globe.svg';
import Box from './icons/box.svg';

// Renders "upstream_calls" from service recursively
const Upstreams = (upstreams) => {

  const renderUpstreams = (upstreams) => {
    if (!upstreams || typeof upstreams !== 'object') {
      return null; // Return null if upstreams is not an object or is undefined/null
    }

    return Object.keys(upstreams).map((url) => {
      const data = upstreams[url];
      const nestedUpstreams = data.upstream_calls || {}; // Check if there are nested calls
      const sources = Object.keys(nestedUpstreams)

      return sources.map((source) => {
        return (
          <div className='upstream' key={source}>
            <div className='upstream-nested-header'>
              <img className='hashicon' src={Box} />
              <h3>{nestedUpstreams[source].name}</h3>
            </div>
            <pre>{nestedUpstreams[source].body}</pre>
            {nestedUpstreams[source].upstream_calls !== undefined && (
              <div>
                {renderUpstreams(nestedUpstreams)}
              </div>
            )}
          </div>
        )
      })
    });
  };

  return (
    <div className='upstream-container'>
      <div className='upstream-header'>
        <img className='hashicon' src={Globe} />
        <h2>HashiDemo Services</h2>
      </div>
      {renderUpstreams(upstreams)}
    </div>
  );
};

export default Upstreams;