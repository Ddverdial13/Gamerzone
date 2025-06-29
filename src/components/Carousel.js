import React from "react";

export default function Carousel() {
  return (
    <div className="container-fluid p-0 mb-5 pb-5">
      <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
          <li data-target="#header-carousel" data-slide-to="1"></li>
          <li data-target="#header-carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item position-relative active" style={{minHeight: "100vh"}}>
            <img className="position-absolute w-100 h-100" src="./media/fondo1.jpg" alt="Fondo 1" style={{objectFit: "cover"}} />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{maxWidth: "900px"}}>
                <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{letterSpacing: "3px"}}>Bienvenidos a GamerZone</h6>
                <h3 className="display-3 text-capitalize text-white mb-3">Tu Universo de Diversión</h3>
                <p className="mx-md-5 px-5">
                  Descubre los títulos más emocionantes para todas las plataformas. Desde los clásicos hasta los últimos lanzamientos, tenemos algo para cada tipo de gamer
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item position-relative" style={{minHeight: "100vh"}}>
            <img className="position-absolute w-100 h-100" src="./media/fondo2.jpg" alt="Fondo 2" style={{objectFit: "cover"}} />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{maxWidth: "900px"}}>
                <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{letterSpacing: "3px"}}>GamerZone</h6>
                <h3 className="display-3 text-capitalize text-white mb-3">Juguetes para Todos</h3>
                <p className="mx-md-5 px-5">
                  Encuentra figuras de acción, peluches, accesorios y otros coleccionables de tus juegos favoritos. Perfectos para niños y adultos que aman los videojuegos.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item position-relative" style={{minHeight: "100vh"}}>
            <img className="position-absolute w-100 h-100" src="./media/fondo3.jpg" alt="Fondo 3" style={{objectFit: "cover"}} />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{maxWidth: "900px"}}>
                <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{letterSpacing: "3px"}}>GamerZone</h6>
                <h3 className="display-3 text-capitalize text-white mb-3">Concursos y Torneos</h3>
                <p className="mx-md-5 px-5">
                  Participa en nuestras competencias y demuestra tus habilidades. Gana premios exclusivos y conviértete en el mejor jugador de la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
