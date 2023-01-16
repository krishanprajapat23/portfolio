import React from "react";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bar bg-transparent">
        <div className="container-fluid container-md">
          <a className="navbar-brand" href="#">
            <img
              loading="lazy"
              src="/src/assets/img/logo.webp"
              alt="logo"
              className="rounded-circle logo"
              width="70"
            />
          </a>
          <button
            className="navbar-toggler toggle-btn toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fas fa-bars"></span>
          </button>
          <div
            className="collapse navbar-collapse navbars"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav navbar-links ms-lg-auto mb-2 mb-lg-0 w-50 justify-content-md-around">
              <li className="nav-item">
                <a className="nav-link link active" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#tech">
                  Tech Stack
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
