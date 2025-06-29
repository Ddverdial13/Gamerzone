import React from "react";

export default function Navbar() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
        <a href="/" className="navbar-brand ml-lg-3">
          <h1 className="m-0 text-primary">
            <img src="./media/1.png" width="50px" alt="Logo" />
            <span className="text-dark">Gamer</span>Zone
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-lg-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav m-auto py-0">
            <a href="/" className="nav-item nav-link active">
              Inicio
            </a>
            <a href="/about" className="nav-item nav-link">
              Nosotros
            </a>
            <a href="/service" className="nav-item nav-link">
              Servicios
            </a>
            <a href="/contact" className="nav-item nav-link">
              Contáctanos
            </a>
          </div>
          <a href="#" className="btn btn-primary d-none d-lg-block">
            Reserva ahora
          </a>
        </div>
      </nav>
    </div>
  );
}
