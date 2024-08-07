import React from 'react';
// import { NavLink } from 'react-router-dom';
// import data from '../data/logement.json';
// import Card from '../components/Card';
import Banner from '../components/Banner';
import ApartmentGrid from '../components/ApartmentGrid';

const Home = () => {
    return (
        <>
            <Banner />
            <ApartmentGrid />
        </>
    );
};

export default Home;
