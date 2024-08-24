import axios from 'axios';

const API_URL = 'https://disease.sh/v3/covid-19'; // URL base de la API

export const fetchDiseaseData = async (endpoint: string) => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};