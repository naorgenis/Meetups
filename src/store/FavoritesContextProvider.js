import { useState, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favMeetup) => {
    setUserFavorites((prevUserFav) => {
      return prevUserFav.concat(favMeetup);
    });
  };

  const deleteFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavorite = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoriteHandler,
    deleteFavorite: deleteFavoriteHandler,
    itemIsFavorite: itemIsFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
