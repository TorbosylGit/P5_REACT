import React from 'react';
// import { NavLink } from 'react-router-dom';
// import data from '../data/logement.json';
// import Card from '../components/Card';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import ApartmentGrid from "../components/ApartmentGrid";
import Main from "../components/ApartmentMain";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Main>
                <Navbar />
                <Banner />
                <ApartmentGrid />
            </Main>
            <Footer />
        </>
    );
};

export default Home;
