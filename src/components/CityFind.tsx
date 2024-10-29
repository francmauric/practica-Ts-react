import { useState } from 'react';
import { TextInput, Button} from '@mantine/core';
import axios from 'axios';

interface CityFindProps {
    onSearch: (cityData: any) => void;
}


function CityFind ({ onSearch }:CityFindProps) {
const [city, setCity] = useState('');

const handleSearch = async () => {
    try {
        const response = await axios.get(
            'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true'
        );
        onSearch(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

    return (
        <div>
            <TextInput 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Enter city name'
            />
            <Button onClick={handleSearch}>Buscar clima</Button>
        </div>
    )
}

export default CityFind;