import React from 'react';
import LogementTags from './LogementTags';
import LogementHost from './LogementHost';

function LogementHeader() {
    return (
        <div className="logement__header">
            <div className="logement__header__title">
                <h1>Cozy loft on the Canal Saint-Martin</h1>
                <h2>Paris, Île-de-France</h2>
                <LogementTags />
            </div>
            <LogementHost />
        </div>
    );
}

export default LogementHeader;
