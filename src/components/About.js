import React from "react";

export default function About() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 pb-5 pb-lg-0">
            <img className="img-fluid w-100" src="./media/inicio1.jpg" alt="Sobre nosotros" />
          </div>
          <div className="col-lg-6">
            <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">Sobre nosotros</h6>
            <h1 className="mb-4">Videojuegos en Línea</h1>
            <p className="pl-4 border-left border-primary">
              Disfruta de una selección de juegos multijugador en línea, compite contra amigos y otros jugadores del mundo.
            </p>
            <div className="row pt-3">
              <div className="col-6">
                <div className="bg-light text-center p-4">
                  <h3 className="display-4 text-primary" data-toggle="counter-up">109</h3>
                  <h6 className="text-uppercase">Torneos realizados</h6>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-light text-center p-4">
                  <h3 className="display-4 text-primary" data-toggle="counter-up">1823</h3>
                  <h6 className="text-uppercase">Premios entregados</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
