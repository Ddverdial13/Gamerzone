import React from "react";

export default function Service() {
  return (
    <>
      {/* Topbar */}
      <div className="container-fluid bg-light d-none d-lg-block">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <small><i className="fa fa-phone-alt mr-2"></i>+504 9268 6789</small>
              <small className="px-3">|</small>
              <small><i className="fa fa-envelope mr-2"></i>gamer_zone_hn@gmail.com</small>
            </div>
          </div>
          <div className="col-lg-6 text-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-primary px-2" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-primary px-2" href="https://x.com/?lang=es" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-primary px-2" href="https://www.linkedin.com/home" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-primary px-2" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-primary pl-2" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <a href="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-primary">
              <img src="/media/1.png" width="50px" alt="Logo" />
              <span className="text-dark">Gamer</span>Zone
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">
              <a href="/" className="nav-item nav-link">Inicio</a>
              <a href="/about" className="nav-item nav-link">Nosotros</a>
              <a href="/service" className="nav-item nav-link active">Servicios</a>
              <a href="/contact" className="nav-item nav-link">Contáctanos</a>
            </div>
            <a href="#" className="btn btn-primary d-none d-lg-block">Reserva ahora</a>
          </div>
        </nav>
      </div>

      {/* Header */}
      <div className="jumbotron jumbotron-fluid bg-jumbotron3" style={{ marginBottom: "90px" }}>
        <div className="container text-center py-5">
          <h3 className="text-white display-3 mb-4">Nuestros Servicios</h3>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0"><a className="text-white" href="/about">Nosotros</a></p>
            <i className="far fa-circle px-3"></i>
            <p className="m-0"><a className="text-white" href="/contact">Contáctanos</a></p>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="container-fluid px-0 py-5 my-5">
        <div className="row mx-0 justify-content-center text-center">
          <div className="col-lg-6">
            <h1>¡Sé Parte de la Aventura!</h1>
          </div>
        </div>
        <div className="owl-carousel service-carousel">
          <div className="service-item position-relative">
            <img className="img-fluid" src="/media/servicio2.jpg" alt="Juego de Motos" />
            <div className="service-text text-center">
              <h4 className="text-white font-weight-medium px-3">Juego de Motos</h4>
              <p className="text-white px-3 mb-3">Siente la adrenalina con nuestras simulaciones de carreras de motos.</p>
              <div className="w-100 bg-white text-center p-4">
                <a className="btn btn-primary" href="#">Más Información</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center bg-appointment mx-0">
          <div className="col-lg-6 py-5">
            <div className="p-5 my-5" style={{ background: "rgba(33, 30, 28, 0.7)" }}>
              <h1 className="text-white text-center mb-4">Tu próxima aventura te espera, agenda tu cita</h1>
              <form>
              s (igual que en tu HTML, solo que con className) */}
                {/* ... */}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer container-fluid position-relative bg-dark py-5" style={{ marginTop: "90px" }}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6 pr-lg-5 mb-5">
              <a href="/" className="navbar-brand">
                <h1 className="mb-3 text-white">Gamer <span className="text-primary">Zone</span></h1>
              </a>
              <p>Sabemos lo importante que es contar con un buen servicio al cliente. Por eso, ofrecemos soporte
                24/7 para resolver cualquier duda o inconveniente. Tu satisfacción es nuestra prioridad.</p>
              <p><i className="fa fa-map-marker-alt mr-2"></i> <a href="https://maps.app.goo.gl/BzPNGuhEuDe3Emke7" target="_blank" rel="noreferrer">Colonia Lomas del Guijarro, Tegucigalpa, Francisco Morazán</a></p>
              <p><i className="fa fa-phone-alt mr-2"></i>+504 9268 6789</p>
              <p><i className="fa fa-envelope mr-2"></i>gamer_zone_hn@gmail.com</p>
              <div className="d-flex justify-content-start mt-4">
                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="https://x.com/?lang=es" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square mr-2" href="https://www.linkedin.com/home" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <div className="row">
                <div className="col-sm-6 mb-5">
                  <h5 className="text-white text-uppercase mb-4">Enlaces rápidos</h5>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white-50 mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Inicio</a>
                    <a className="text-white-50 mb-2" href="/about"><i className="fa fa-angle-right mr-2"></i>Nosotros</a>
                    <a className="text-white-50 mb-2" href="/service"><i className="fa fa-angle-right mr-2"></i>Servicios</a>
                    <a className="text-white-50" href="/contact"><i className="fa fa-angle-right mr-2"></i>Contáctanos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light border-top py-4" style={{ borderColor: "rgba(256, 256, 256, .15)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0 text-white">&copy; <a href="/">GamerZone</a>. Todos los derechos reservados.</p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0 text-white">Diseñado por <a href="/">Douglas Verdial</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
