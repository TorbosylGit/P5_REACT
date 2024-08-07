import React from 'react';

function LogementHost() {
    return (
        <div className="logement__host">
            <div className="zoom">
                <p className="host-name">Alexandre Dumas</p>
                <div className="host-picture"></div>
            </div>
            <div className="rating">
                <span className='on'>★</span>
                <span className='on'>★</span>
                <span className='on'>★</span>
                <span className='off'>★</span>
                <span className='off'>★</span>
            </div>
        </div>
    );
}

export default LogementHost;
