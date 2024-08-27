import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import Carousel from '../components/Carousel';
import Host from '../components/Host';
import Tags from '../components/Tags';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';
import data from '../data/logement.json';

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = data.find((item) => item.id === id);

    useEffect(() => {
        if (!logement) {
            navigate('/404');
        }
    }, [logement, navigate]);

    if (!logement) {
        return null;
    }

    return (
        <>
            <Navbar />
            <div className="logement-container">
                <Carousel cover={logement.cover} pictures={logement.pictures} />
                <div className="logement-details">
                    <div className="logement-header">
                        <h1 className="logement-title">{logement.title}</h1>
                        <h2 className="logement-location">{logement.location}</h2>
                        <Tags tags={logement.tags} />
                    </div>
                    <div className="logement-host-rating">
                        <Host host={logement.host} />
                        <Rating rating={logement.rating} />
                    </div>
                </div>
                <div className="logement-description-equipements">
                    <Dropdown title="Description" items={[logement.description]} />
                    <Dropdown title="Équipements" items={logement.equipments} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Logement;
