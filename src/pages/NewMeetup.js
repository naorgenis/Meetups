import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMettup = () => {
  const history = useHistory();
  const addMeetupHandler = async (meetup) => {
    await fetch(
      `https://react-meetup-1eed7-default-rtdb.firebaseio.com/meetups.json`,
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: { "Content-Type": "application/json" },
      }
    );
    await history.replace("/");
  };

  return (
    <div>
      <h1>New Meetup page</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMettup;
