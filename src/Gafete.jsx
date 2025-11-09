import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

const Gafete = () => {
  const participante = useLoaderData();
  const [showFront, setShowFront] = useState(true);

  return (
    <div className="py-4">
      <div className="mb-3">
        <Link to="/participantes" className="btn btn-outline-secondary">
          ← Volver al listado
        </Link>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="text-center mb-3">
            <button
              className="btn btn-primary"
              onClick={() => setShowFront(!showFront)}
            >
              Voltear Gafete
            </button>
          </div>

          {/* Frente del gafete */}
          {showFront ? (
            <div
              className="card shadow-lg"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div
                className="card-header text-white text-center py-4"
                style={{ backgroundColor: "#0d6efd" }}
              >
                <h4 className="mb-0">Congreso TIC's 2024</h4>
                <p className="mb-0 small">Universidad Tecnológica de León</p>
              </div>
              <div className="card-body text-center py-5">
                <img
                  src={participante.avatar}
                  alt={participante.nombre}
                  className="rounded-circle mb-4 border border-primary border-4"
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
                <h2 className="mb-2">
                  {participante.nombre} {participante.apellidos}
                </h2>
                <p className="text-primary fs-5 mb-0">
                  {participante.ocupacion}
                </p>
              </div>
              <div
                className="card-footer text-center py-3"
                style={{ backgroundColor: "#0d6efd", color: "white" }}
              >
                <small>PARTICIPANTE</small>
              </div>
            </div>
          ) : (
            /* Reverso del gafete */
            <div
              className="card shadow-lg"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div
                className="card-header text-white text-center py-4"
                style={{ backgroundColor: "#0d6efd" }}
              >
                <h5 className="mb-0">Información de Contacto</h5>
              </div>
              <div className="card-body py-5">
                <div className="mb-4">
                  <label className="text-muted small">NOMBRE COMPLETO</label>
                  <p className="fs-5 mb-0">
                    {participante.nombre} {participante.apellidos}
                  </p>
                </div>

                <div className="mb-4">
                  <label className="text-muted small">EMAIL</label>
                  <p className="mb-0">{participante.email}</p>
                </div>

                <div className="mb-4">
                  <label className="text-muted small">TWITTER</label>
                  <p className="mb-0">
                    <a
                      href={`https://twitter.com/${participante.usuarioTwitter.replace(
                        "@",
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      {participante.usuarioTwitter}
                    </a>
                  </p>
                </div>

                <div className="mb-4">
                  <label className="text-muted small">OCUPACIÓN</label>
                  <p className="mb-0">{participante.ocupacion}</p>
                </div>

                <div className="text-center mt-4">
                  <img
                    src="/lista.png"
                    alt="Logo"
                    style={{ maxWidth: "100px", opacity: 0.5 }}
                  />
                </div>
              </div>
              <div
                className="card-footer text-center py-3 text-white"
                style={{ backgroundColor: "#0d6efd" }}
              >
                <small>ID: {participante.id}</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gafete;

export const loaderGafete =
  (apiUrl) =>
  async ({ params }) => {
    try {
      const response = await fetch(`${apiUrl}/participante/${params.id}`);

      if (!response.ok) {
        throw new Error("Participante no encontrado");
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Response("Participante no encontrado", { status: 404 });
    }
  };
