import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <img
            src="/lista.png"
            alt="Logo Congreso"
            className="img-fluid mb-4"
            style={{ maxWidth: "200px" }}
          />
          <h1 className="display-4 mb-4">
            Congreso de Tecnologías de la Información
          </h1>
          <p className="lead mb-4">Universidad Tecnológica de León</p>
          <p className="text-muted mb-5">
            Únete al evento más importante de TI del año. Conecta con
            profesionales, aprende de expertos y expande tu red.
          </p>
          <Link to="/participantes" className="btn btn-primary btn-lg">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
