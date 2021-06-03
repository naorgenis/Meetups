import { useContext } from "react";
import "./meetupItem.css";
import FavoritesContext from "../../store/FavoritesContextProvider";

const MeetupItem = ({ meetup, onDelete }) => {
  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite = favoritesCtx.itemIsFavorite(meetup.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      favoritesCtx.deleteFavorite(meetup.id);
    } else favoritesCtx.addFavorites(meetup);
    return;
  };
  return (
    <div className="card meetup_card">
      <img src={meetup.Image} className="card-img-top" alt={meetup.title} />
      <div className="card-body">
        <h5 className="card-title">{meetup.title}</h5>
        <address>{meetup.address}</address>
        <p className="card-text">{meetup.description}</p>
        <button
          onClick={toggleFavorite}
          className={
            isFavorite ? "btn btn-warning btn-form" : "btn btn-success btn-form"
          }
        >
          {isFavorite ? "Remove from favorites" : "Add to Favorites"}
        </button>
        {!isFavorite ? (
          <button
            className="btn btn-danger btn-form"
            onClick={() => onDelete(meetup.id)}
          >
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MeetupItem;
