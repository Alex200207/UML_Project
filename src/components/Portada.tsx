import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import backgroundImage1 from '../assets/images/Banner de Salud Profesional Ilustrativo Azul.png';
import backgroundImage2 from '../assets/images/1.png';



interface HeaderProps {
  backgroundImage: string;
  height: string;
  name: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundImage, height }) => {

  

 
  
  
  const [index, setIndex] = useState(0);
  const images = [
    { src: backgroundImage1, title: `Foro Informativo`, description: 'Prevencion de las enfermedades cronicas', textColor: '#000' },
    { src: backgroundImage2, title: `Foro Informativo`, description: 'Prevencion de las enfermedades cronicas', textColor: '#000' },
  ];
  

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <header
      className='header-custom'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height,
        position: 'relative',
      }}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={2500}
        pause="hover"
      >
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 block-custom "
              src={image.src}
              alt={`Slide ${idx + 1}`}
              style={{
                height,
              }}
            />
            <Carousel.Caption className="present-custom" style={{ position: 'absolute', bottom: '25%', right: '50%' }}>
              <h1 className="display-4" style={{ color: image.textColor }}>{image.title}</h1>
              <p className="lead mb-5" style={{ color: image.textColor }}>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </header>
  );
};

export default Header;
