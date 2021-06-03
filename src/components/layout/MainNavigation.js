import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/FavoritesContextProvider";

const MainNavication = () => {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MEETUPS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active " to="/">
              All Meetups
            </Link>
            <Link className="nav-link active" to="/favorites">
              Favorites
              <span className="badge bg-secondary">
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
            <Link className="nav-link active" to="/new-meetup">
              New Meetup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavication;
