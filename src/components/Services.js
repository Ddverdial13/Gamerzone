import React from "react";

export default function Services() {
  return (
    <div className="container-fluid px-0 py-5 my-5">
      <div className="row mx-0 justify-content-center text-center">
        <div className="col-lg-6">
          <h1>Nuestros Servicios</h1>
        </div>
      </div>
      <div className="owl-carousel service-carousel">

        <div className="service-item position-relative">
          <img className="img-fluid" src="./media/servicio2.jpg" alt="Juego de Motos" />
          <div className="service-text text-center">
            <h4 className="text-white font-weight-medium px-3">Juego de Motos</h4>
            <p className="text-white px-3 mb-3">Siente la adrenalina con nuestras simulaciones de carreras de motos.</p>
            <div className="w-100 bg-white text-center p-4">
              <a className="btn btn-primary" href="#">Más Información</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
