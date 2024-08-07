import React from 'react';
// import { NavLink } from "react-router-dom";
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';

const About = () => {
    return (
        <>
            <Banner />
            <div className="about__dropdown__container">
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </div>
        </>
    );
};

export default About;
