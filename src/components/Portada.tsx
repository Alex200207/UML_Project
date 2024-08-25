import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import backgroundImage1 from '../assets/images/Banner de Salud Profesional Ilustrativo Azul.png';
import backgroundImage2 from '../assets/images/1.png';

interface HeaderProps {
  backgroundImage: string;
  height: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundImage, height }) => {
  const [index, setIndex] = useState(0);
  const images = [
    { src: backgroundImage1, title: 'Foro Informativo', description: 'Prevención de las enfermedades crónicas', textColor: '#fff' },
    { src: backgroundImage2, title: 'Foro Informativo', description: 'Prevención de las enfermedades crónicas', textColor: '#FFF' },
  ];

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <header
      className="header-custom"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height,
        position: 'relative',
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />
      <Carousel
        className="carousel-custom"
        activeIndex={index}
        onSelect={handleSelect}
        interval={2500}
        pause="hover"
      >
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 block-custom"
              src={image.src}
              alt={`Slide ${idx + 1}`}
              style={{
                height,
              }}
            />
            <div
              className="overlay-custom"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.2)', // Ajusta la opacidad del fondo
              }}
            />
            <Carousel.Caption
              className="present-custom"
              style={{
                position: 'absolute',
                top: '60%', // Baja la posición vertical al 60%
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                opacity: 0,
                animation: 'fadeIn 1.5s ease-in-out forwards', // Reduce el tiempo de aparición a 1.5s
              }}
            >
              <h1
                className="display-4"
                style={{
                  color: image.textColor,
                  fontWeight: 700,
                  fontFamily: `'Montserrat', sans-serif`,
                  fontSize: '3rem', // Aumenta el tamaño de la letra del título
                }}
              >
                {image.title}
              </h1>
              <p
                className="lead mb-5"
                style={{
                  color: image.textColor,
                  fontWeight: 400,
                  fontFamily: `'Montserrat', sans-serif`,
                  fontSize: '1rem', // Reduce el tamaño de la letra de la descripción
                  display: '-webkit-box',
                  WebkitLineClamp: 2, // Limita el texto a 2 líneas
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  margin: 0, // Elimina el margen inferior
                  whiteSpace: 'normal', // Permite que las palabras se desborden y bajen a la siguiente línea
                }}
              >
                {image.description}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
