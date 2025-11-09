import React, { useState } from "react";
import { useLoaderData, Link, useSearchParams } from "react-router-dom";

const Participantes = () => {
  const participantes = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ search: searchTerm });
      window.location.href = `/participantes?search=${searchTerm}`;
    } else {
      setSearchParams({});
      window.location.href = "/participantes";
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchParams({});
    window.location.href = "/participantes";
  };

  return (
    <div className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Participantes Registrados</h2>
        <Link to="/registro" className="btn btn-success">
          + Nuevo Participante
        </Link>
      </div>

      <form onSubmit={handleSearch} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar participante por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
          {searchParams.get("search") && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={clearSearch}
            >
              Limpiar
            </button>
          )}
        </div>
      </form>

      {participantes.length === 0 ? (
        <div className="alert alert-info">No se encontraron participantes.</div>
      ) : (
        <div className="row g-4">
          {participantes.map((participante) => (
            <div key={participante.id} className="col-md-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <Link to={`/gafete/${participante.id}`}>
                    <img
                      src={participante.avatar}
                      alt={participante.nombre}
                      className="rounded-circle mb-3"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                  <h5 className="card-title">
                    {participante.nombre} {participante.apellidos}
                  </h5>
                  <p className="card-text text-muted">
                    {participante.ocupacion}
                  </p>
                  <a
                    href={`https://twitter.com/${participante.usuarioTwitter.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    {participante.usuarioTwitter}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Participantes;

export const loaderParticipantes =
  (apiUrl) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");

    try {
      const endpoint = search
        ? `${apiUrl}/listado?q=${encodeURIComponent(search)}`
        : `${apiUrl}/listado`;

      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("Error al cargar participantes");

      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
