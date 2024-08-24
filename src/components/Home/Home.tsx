import React from 'react';
import InfoCard from '../info/infoCards';

const Home: React.FC = () => {
    return (
        <div className="container mt-4">
            <h1 className="text-center">Bienvenido a InfoSalud</h1>
            <p className="text-center mb-5">Explora nuestra plataforma para obtener información sobre diversas enfermedades.</p>
            <div className="row">
                <div className="col-md-6">
                    <InfoCard title="Cancer" description="Información sobre el Cancer de mama ." />
                </div>
                <div className="col-md-6">
                    <InfoCard title="Diabetes" description="Información sobre la diabetes." />
                </div>
            </div>
        </div>
    );
};

export default Home;