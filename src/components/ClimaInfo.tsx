import { Card, Text, Button } from '@mantine/core';

interface ClimaInfoProps {
    weatherData: any;
    onAddFavorite: () => void;
}

function ClimaInfo ({ weatherData, onAddFavorite}: ClimaInfoProps) {

    return(
        <Card>
            <Text>Temperature: {weatherData.current_weather.temperature} °C</Text>
            <Text>Conditions: {weatherData.current_weather.weathercode} </Text>
            <Text>Humidity: {weatherData.current_weather.relative_humidity} %</Text>
            <Text>Wind Speed: {weatherData.current_weather.windspeed} km/h </Text>
            <Button onClick={onAddFavorite}>Agregar a favoritos</Button>
        </Card>
    )   
}

export default ClimaInfo;
