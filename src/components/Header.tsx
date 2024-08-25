import React from 'react';
import { Link } from 'react-router-dom';



interface HeaderProps {
    toggleAside: () => void;
  }

  const Header: React.FC<HeaderProps> = ({ toggleAside}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
          <div className="container">
            <button className="btn me-22" onClick={toggleAside} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
            <a className="navbar-brand" href="#">
              InfoSalud
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="  navbarCollection" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <Link to="/UML_Project" className="nav-link" >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Nosotros" className="nav-link" >
                    Nosotros
                  </Link>
                </li>
              </ul>
              
            </div>
    
          </div>
        </nav>
      );
};

export default Header;