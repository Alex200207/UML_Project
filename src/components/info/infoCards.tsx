import React from 'react';
import { Link } from 'react-router-dom';

interface InfoCardProps {
    title: string;
    description: string;
    image: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, image }) => {
    // Normalizar el título y quitar acentos
    const normalizedTitle = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    return (
        <div className="card h-100 d-flex flex-column">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body d-flex flex-column">
                <p className="card-text flex-grow-1">{description}</p>
                <Link to={`/disease/${normalizedTitle}`} className="btn btn-primary mt-auto">
                    Ver Más
                </Link>
            </div>
        </div>
    );
};

export default InfoCard;
