import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

import { IoMdHome } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdProductionQuantityLimits } from "react-icons/md";

interface AsideProps {
  isOpen: boolean;
}

const Aside: React.FC<AsideProps> = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-linkp" aria-current="page">
            <IoMdHome /> Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Nosotros" className="nav-linkp">
            <MdAccountCircle /> Nosotros
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Consulta" className="nav-linkp">
            <MdProductionQuantityLimits /> Consulta
          </Link>
        </li>
        <li className="nav-item">

        </li>
      </ul>
    </div>
  );
};

export default Aside;
