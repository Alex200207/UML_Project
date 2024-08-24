import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light text-center text-lg-start mt-auto">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Acerca de Nosotros</h5>
        <p>
          Somos una comunidad dedicada a promover la salud y el bienestar, proporcionando información y soporte a través de discusiones abiertas y colaborativas.
        </p>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Categorías Populares</h5>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-dark">Nutrición</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Ejercicio</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Salud Mental</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Consejos Médicos</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Enlaces Útiles</h5>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-dark">Contáctanos</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Términos de Servicio</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Política de Privacidad</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Preguntas Frecuentes</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Síguenos</h5>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li>
            <a href="#!" className="text-dark me-4"><i className="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#!" className="text-dark me-4"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#!" className="text-dark me-4"><i className="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#!" className="text-dark"><i className="fab fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="text-center p-3 bg-dark text-white">
    © 2024 Foro de Salud - Todos los derechos reservados.
  </div>
</footer>
    );
};

export default Footer;