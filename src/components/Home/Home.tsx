import React from 'react';
import InfoCard from '../info/infoCards';
import portadaCancer from '../../assets/images/portada_cancer.jpg';
import diabetesPortada from '../../assets/images/diabetesPortada.jpg';
import hipertencion from '../../assets/images/hipertencion.png';

const Home: React.FC = () => {
    return (
        <div className="container mt-4">
            <h1 className="text-center">Bienvenido a InfoSalud</h1>
            <p className="text-center mb-5">Explora nuestra plataforma para obtener información sobre diversas enfermedades.</p>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <InfoCard 
                        title="cancer" 
                        description="Información sobre el Cáncer de mama." 
                        image={portadaCancer}
                    />
                </div>
                <div className="col-md-4">
                    <InfoCard 
                        title="Diabetes" 
                        description="Información sobre la diabetes." 
                        image={diabetesPortada}
                    />
                </div>
                <div className="col-md-4">
                    <InfoCard 
                        title="hipertension" 
                        description="¿Qué es la hipertensión?" 
                        image={hipertencion}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
