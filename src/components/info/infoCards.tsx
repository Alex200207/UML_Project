import React from 'react';
import { Link } from 'react-router-dom';

interface InfoCardProps {
    title: string;
    description: string;
}

const InfoCards: React.FC<InfoCardProps> = ({ title, description }) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Link to={`/disease/${title.toLowerCase()}`} className="btn btn-primary">
                    Ver Más
                </Link>
            </div>
        </div>
    );
};

export default InfoCards;