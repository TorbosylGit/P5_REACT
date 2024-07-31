import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../data/logement.json';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Main from '../components/ApartmentMain';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <div className="main">
                <Main>
                    <Navbar />
                    <Banner />
                    {data.map((item) => (
                        <NavLink to={`/logement/${item.id}`}>
                            <Card title={item.title} image={item.cover} />
                        </NavLink>
                    ))}
                </Main>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
