import React from "react";
import { Link } from "react-router-dom";
import data from "../data/logement.json";
import Card from "../components/Card";
import "../css/style.css"; // Assurez-vous que les styles appropriés sont importés
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import "../pages/Home.css";


const Home = () => {
  return (
<div>
  <Navbar/>
  <Banner/>
</div>

  );
};

export default Home;
