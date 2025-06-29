import React from "react";

export default function Footer() {
  return (
    <footer className="footer container-fluid position-relative bg-dark py-5" style={{ marginTop: "90px" }}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 pr-lg-5 mb-5">
            <a href="/" className="navbar-brand">
              <h1 className="mb-3 text-white">Gamer <span className="text-primary">Zone</span></h1>
            </a>
            <p>Sabemos lo importante que es contar con un buen servicio al cliente. Por eso, ofrecemos soporte 24/7 para resolver cualquier duda o inconveniente. Tu satisfacción es nuestra prioridad.</p>
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
    </footer>
  );
}
