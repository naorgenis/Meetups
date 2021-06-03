import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import MainNavication from "./components/layout/MainNavigation";

import "./App.css";

function App() {
  return (
    <Router>
      <MainNavication />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/new-meetup">
            <NewMeetup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
