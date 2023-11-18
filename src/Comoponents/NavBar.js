
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Tienda Solcito</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="../1era entrega/html/camisetas.html">Camisetas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../1era entrega/html/Pantalones.html">Pantalones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../1era entrega/html/Vestidos.html">Vestidos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
