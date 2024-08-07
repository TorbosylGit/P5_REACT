import React from 'react';
import Apartment from './Apartment.js';
import data from '../data/logement.json';

// fetch('../data/logement.json').then(console.log);

fetch('../data/logement.json')
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.error);

function ApartmentGrid() {
    return (
        <div className="grid">
            <Apartment />
            <Apartment />
            <Apartment />
            <Apartment />
            <Apartment />
            <Apartment />
        </div>
    );
}

export default ApartmentGrid;
