import React from 'react';

function Host({ host }) {
  return (
    <div className="host-container">
      <p className="host-name">{host.name}</p>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
}

export default Host;