import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BiBookReader } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiMedicalClipboard } from "react-icons/ci";

interface AsideProps {
  isOpen: boolean;
  onClose: () => void; // Función para cerrar el sidebar
}

const Aside: React.FC<AsideProps> = ({ isOpen, onClose }) => {
  const asideRef = useRef<HTMLDivElement | null>(null);

  // Hook para cerrar el sidebar al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (asideRef.current && !asideRef.current.contains(event.target as Node)) {
        onClose(); // Cierra el sidebar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={asideRef}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/UML_Project" className="nav-linkp" aria-current="page">
            <IoMdHome /> Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Nosotros" className="nav-linkp">
          <BiBookReader /> Nosotros
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Consulta" className="nav-linkp">
          <CiMedicalClipboard /> Consulta
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
