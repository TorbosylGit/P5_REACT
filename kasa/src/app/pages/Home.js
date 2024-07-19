import data from "../data/logement.json";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
    <div className="toto">
      {data.map((item, index) => {
        return (
          <Link to={`/logement/${item.id}`}>
            <Card key={index} title={item.title} image={item.cover}/>
          </Link>
        );
      })}
    </div>
    </>
  );
};

export default Home;
