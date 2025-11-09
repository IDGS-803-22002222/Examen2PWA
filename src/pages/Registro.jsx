import React, { useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  return (
    <div className="py-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Registro de Participante</h3>
            </div>
            <div className="card-body">
              <Form method="post">
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="apellidos" className="form-label">
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellidos"
                    name="apellidos"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="usuarioTwitter" className="form-label">
                    Usuario de Twitter *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="usuarioTwitter"
                      name="usuarioTwitter"
                      placeholder="usuario"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="ocupacion" className="form-label">
                    Ocupación *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ocupacion"
                    name="ocupacion"
                    placeholder=""
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="avatar" className="form-label">
                    URL del Avatar (opcional)
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="avatar"
                    name="avatar"
                    placeholder="link de la img"
                  />
                </div>

                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terminos"
                      checked={aceptaTerminos}
                      onChange={(e) => setAceptaTerminos(e.target.checked)}
                      required
                    />
                    <label className="form-check-label" htmlFor="terminos">
                      Acepto los términos y condiciones *
                    </label>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!aceptaTerminos}
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/participantes")}
                  >
                    Cancelar
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;

export const actionRegistro =
  (apiUrl) =>
  async ({ request }) => {
    const formData = await request.formData();

    const participante = {
      nombre: formData.get("nombre"),
      apellidos: formData.get("apellidos"),
      email: formData.get("email"),
      usuarioTwitter: formData.get("usuarioTwitter").startsWith("@")
        ? formData.get("usuarioTwitter")
        : `@${formData.get("usuarioTwitter")}`,
      ocupacion: formData.get("ocupacion"),
      avatar: formData.get("avatar") || "",
    };

    try {
      const response = await fetch(`${apiUrl}/registro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(participante),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.message || "Error al registrar participante");
        return null;
      }

      alert("Participante registrado exitosamente");
      return redirect("/participantes");
    } catch (error) {
      console.error(error);
      alert("Error al conectar con el servidor");
      return null;
    }
  };
