import React from 'react';
import LogementCarrousel from '../components/LogementCarrousel';
import LogementHeader from '../components/LogementHeader';
import Dropdown from '../components/Dropdown';

function Logement() {
    return (
        <>
            <LogementCarrousel />
            <LogementHeader />
            <div className='components-dropdown'>
                <Dropdown />
                <Dropdown />
            </div>
        </>
    );
}

export default Logement;
