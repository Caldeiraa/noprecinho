import React from 'react';

function Home() {
  return (
    <div className="conteudo">
      <div className="cabecalho">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid d-flex justify-content-around">
            <a className="navbar-brand me-auto" href="#">NoPrecinho</a>
            <img className="logo me-auto" src="img/NP.png" alt="NoPrecinho Logo" />
            <div className="offcanvas offcanvas-end oi" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{ color: 'white' }}>jose</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav flex-grow-1 ms-5 justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" href="#">Sobre</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" href="#">Serviços</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" href="#">Portfólios</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2 mr-5" href="#">Contato</a>
                  </li>
                  <li className="ms-5">
                    <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn " type="submit">Search</button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" className="login-button">Login</a>
            <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>

      <div className="container parceiros">
        <h3>Parceiros</h3>
        <div className="slider-wrapper">
          <ul className="image-list">
            <li><img className="image-item" src="img/Carrefour-Logo.png" alt="Carrefour Logo" /></li>
            <li><img className="image-item tt" src="img/extrabom-2x.webp" alt="Extrabom Logo" /></li>
            <li><img className="image-item" src="img/header-logo.png" alt="Header Logo" /></li>
            <li><img className="image-item" src="img/logo-bh-white.png" alt="BH Logo" /></li>
            <li><img className="image-item" src="img/Logo_assai.png" alt="Assai Logo" /></li>
            <li><img className="image-item tt" src="img/extrabom-2x.webp" alt="Extrabom Logo" /></li>
            <li><img className="image-item" src="img/Carrefour-Logo.png" alt="Carrefour Logo" /></li>
            <li><img className="image-item" src="img/logo-bh-white.png" alt="BH Logo" /></li>
            <li><img className="image-item" src="img/header-logo.png" alt="Header Logo" /></li>
            <li><img className="image-item" src="img/Logo_assai.png" alt="Assai Logo" /></li>
          </ul>
        </div>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb"></div>
          </div>
        </div>
        <h3>Promoções</h3>
      </div>
    </div>
  );
}

export default Home;
