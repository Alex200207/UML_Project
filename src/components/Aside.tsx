import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
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
          <Link to="/inicio" className="nav-linkp" aria-current="page">
            <IoMdHome /> Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Nosotros" className="nav-linkp">
            <MdAccountCircle /> #
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/productPage/productos" className="nav-linkp">
            <MdProductionQuantityLimits /> #
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/productPage/categorias" className="nav-linkp">
            <BiSolidCategory /> #
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
