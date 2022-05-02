import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
    isFavorite: () => {},
});

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (meetup) => setFavorites([...favorites, meetup]);

    const removeFavorite = (meetup) =>
        setFavorites(favorites.filter((f) => f.id !== meetup.id));

    const isFavorite = (meetup) => favorites.some((f) => f.id === meetup.id);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addFavorite,
                removeFavorite,
                isFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
