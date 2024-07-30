import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/logement.json';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            {data.map((item) => (
                <Link to={`/logement/${item.id}`}>
                    <Card title={item.title} image={item.cover} />
                </Link>
            ))}
            <Card />
        </div>
    );
};

export default Home;
