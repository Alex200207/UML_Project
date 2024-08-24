// src/services/api.ts
import axios from 'axios';


export const fetchDiseaseData = async (query: string) => {
    const apiKey = process.env.REACT_APP_API_KEY; 
    const response = await axios.get(`https://api.openai.com/v1/diseases/${query}`, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
    });
    return response.data;
};
