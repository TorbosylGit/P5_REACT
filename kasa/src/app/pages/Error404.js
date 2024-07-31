import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </div>
  );
};

export default Error404;
