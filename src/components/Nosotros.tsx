import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Nosotros: React.FC = () => {
  return (
    <section id="about-us" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="display-4 mb-4 textNosotros">Conoce a Nuestro Equipo</h2>
          </Col>
        </Row>
        <Row className="mb-5">
        
        </Row>
        <Row className="text-center">
          <Col>
            <h3 className="h4 textNosotros">¡Únete a Nosotros!</h3>
            <p className="lead textNosotros">
              Si compartes nuestra pasión por la innovación y el servicio, no dudes en ponerte en contacto con nosotros.<br/>
              Somos un equipo de docentes y estudiantes de la universidad Martin Lutero, que estamos innovando con la creación de un foro informativo 
                  para la prevención, manejo y cuidado de las enfermedades crónicas con el objetivo de hacer conciencia de la importancia de buscar información
                  en un foro que orienta acerca de diferentes enfermedades y cómo prevenirlas.
            </p>
            <a href="/contacto" className="btn btn-customN">Contáctanos</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Nosotros;