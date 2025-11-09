import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />

      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5 text-center">
            <div
              className="spinner-border spinner-border-sm me-2"
              role="status"
            >
              <span className="visually-hidden">Cargando...</span>
            </div>
            Cargando...
          </div>
        )}
        <Outlet />
      </main>

      <footer className="container text-center py-4 mt-5 border-top">
        <p className="text-muted mb-0">Universidad Tecnologica de León</p>
      </footer>
    </>
  );
};

export default LayoutPublic;
