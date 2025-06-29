import React from "react";

export default function Topbar() {
  return (
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
  );
}
