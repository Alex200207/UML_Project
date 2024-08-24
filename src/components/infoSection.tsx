import React, { useState } from 'react';
import { fetchDiseaseData } from '../services/api.ts';
const InfoSection: React.FC = () => {
    interface DiseaseData {
        // Define the properties of your data object here
        // For example:
        id: number;
        name: string;
        // ...
    }
    
    const [data, setData] = useState<DiseaseData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>('');

    const handleSearch = async () => {
        try {
            const result = await fetchDiseaseData(`all?query=${query}`); // Ajusta según la API y el endpoint
            setData(result);
        } catch {
            setError('Error fetching data');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Consultar Información sobre Enfermedades</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md w-full"
                />
                <button
                    onClick={handleSearch}
                    className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Buscar
                </button>
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {data ? (
                <pre className="bg-gray-100 p-4 rounded-md">{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p className="text-gray-500">No hay datos para mostrar.</p>
            )}
        </div>
    );
};

export default InfoSection;