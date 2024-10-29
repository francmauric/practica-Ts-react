import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import CityFind from './components/CityFind';
import ClimaInfo from './components/ClimaInfo';
import FavoritosList from './components/FavoritosList';
import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [favorites, setFavorites] = useLocalStorage<any[]>('favorites', []);

  const handleSearch = (data: any) => {
    setWeatherData(data);
  };

  const handleAddFavorite = () => {
    if (weatherData) {
      setFavorites([...favorites, weatherData]);
    }
  };

  const handleRemoveFavorite = (cityName: string) => {
    setFavorites(favorites.filter((city) => city.name !== cityName));
  }


  return (
    <MantineProvider>
      <h1>funciona</h1>
      <CityFind onSearch={handleSearch} />
      {weatherData && (
        <ClimaInfo weatherData={weatherData} onAddFavorite={handleAddFavorite} />
      )}
      <FavoritosList favorites={favorites} onRemoveFavorite={handleRemoveFavorite}/>
    </MantineProvider>
  )
}

export default App
