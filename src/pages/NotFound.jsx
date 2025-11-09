import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Página no encontrada</h2>
          <p className="lead mb-4">
            Lo sentimos, la página que buscas no existe.
          </p>
          <Link to="/" className="btn btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
