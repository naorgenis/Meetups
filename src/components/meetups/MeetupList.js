import MeetupItem from "./MeetupItem";
import "./meetupList.css";

const MeetupList = ({ meetups, onDelete }) => {
  return (
    <ul className="list">
      {meetups.map((data) => (
        <MeetupItem key={data.id} meetup={data} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default MeetupList;
