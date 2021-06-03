import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMeetup();
  }, []);

  const getMeetup = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://react-meetup-1eed7-default-rtdb.firebaseio.com/meetups.json"
    );
    const data = await response.json();
    const dataArray = [];
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };
      dataArray.push(meetup);
    }
    setIsLoading(false);
    setMeetups(dataArray);
  };

  const deleteMeetupHandler = (meetupID) => {
    console.log(meetupID);
    fetch(
      `https://react-meetup-1eed7-default-rtdb.firebaseio.com/meetups/${meetupID}.json`,
      {
        method: "DELETE",
      }
    );

    const newMeetups = meetups.filter((meetup) => meetup.id !== meetupID);
    setMeetups(newMeetups);
  };

  return (
    <section>
      <h1>All Meet-up page</h1>
      {isLoading ? (
        <section>
          <p>Loading . . . </p>
        </section>
      ) : (
        ""
      )}
      <MeetupList
        meetups={meetups}
        key={meetups.id}
        onDelete={deleteMeetupHandler}
      />
    </section>
  );
};

export default AllMeetups;
