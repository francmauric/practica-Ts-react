import { Card, Button, Text } from '@mantine/core';

interface FavoritosListProps {
    favorites: any[];
    onRemoveFavorite: (cityName: string) => void;
}

function FavoritosList ({ favorites, onRemoveFavorite}:FavoritosListProps) {

    return(
        <div>
            {favorites.map((city) => (
                <Card key={city.name}>
                    <Text>{city.name}</Text>
                    <Button onClick={() => onRemoveFavorite(city.name)} >Remove</Button>
                </Card>
            ))}
        </div>
    )
}

export default FavoritosList;