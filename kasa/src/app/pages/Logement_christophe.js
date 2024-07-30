import data from '../data/logement.json';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Error404 from './Error404';
import Tags from '../components/Tags';

// Récupérer l'id que le visiteur visite "c67ab8a7"
// Récupérer les données du logement correspondant à l'id
// a : Si le logement existe, afficher les informations
// b : Si le logement n'existe pas, on redirige vers une page d'erreur 404

const Logement = () => {
    const { id } = useParams();

    const [logement, setLogement] = useState({
        cover: [],
        pictures: [],
        title: '',
        location: '',
        tags: [],
        host: [],
        rating: [],
        description: '',
        equipments: [],
    });

    useEffect(() => {
        const selectLogement = data.find((item) => item.id === id);
        if (selectLogement) {
            setLogement(selectLogement);
        }
    }, [id]);


    if(logement.id === undefined){
        return <Error404 />
    }
    return (
        <>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <Tags content={logement.tags} />
            

            {/* 
 <div>
    <Carousel /> 
    

    // IL FAUDRA BOUCLER SUR LE COMPOSANT POUR EN CREER X 
 

    <Collapse title="DESCRIPTION"  content="data.description"/>
    <Collapse title="EQUIPEMENTS"  content="data.equipments"/>


    <Host content="" avatar="" />

    <Ratings stars="" />
 </div>

 */}
        </>
    );
};

export default Logement;
