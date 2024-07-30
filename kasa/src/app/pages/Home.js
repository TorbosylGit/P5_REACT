import React from 'react';
// import { Link } from 'react-router-dom';
// import data from '../data/logement.json';
// import Card from '../components/Card';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import ApartmentGrid from "../components/ApartmentGrid";
import Main from "../components/ApartmentMain";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Main>
                <Banner />
                <ApartmentGrid />
            </Main>
            <Footer />
        </div>
    );
};

export default Home;
