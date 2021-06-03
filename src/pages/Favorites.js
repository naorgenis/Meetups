import { useContext } from "react";
import FavoritesContext from "../store/FavoritesContextProvider";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>There is no favorite meeting. Start Add some </p>;
  } else
    content = (
      <MeetupList
        meetups={favoriteCtx.favorites}
        key={favoriteCtx.favorites.id}
      />
    );

  return (
    <section>
      <h1>favorite page</h1>
      {content}
    </section>
  );
};

export default Favorites;
