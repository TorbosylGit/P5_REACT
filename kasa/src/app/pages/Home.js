import React from 'react';
import data from '../data/logement.json';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <div className="home">
                <div className="home-container">
                    {data.map((logement) => (
                           <NavLink to={`/logement/${logement.id}`}>
                               <Card
                            key={logement.id}
                            title={logement.title}
                            cover={logement.cover}
                        />
                       </NavLink>  
                    
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
