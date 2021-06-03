import { useRef, useState } from "react";
import Backdrop from "../layout/Backdrop";
import Modal from "../layout/Modal";

import "./newMeetupForm.css";

const NewMeetupForm = ({ addMeetup }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const entredTitle = titleInputRef.current.value;
    const entredImage = imageInputRef.current.value;
    const entredAddress = addressInputRef.current.value;
    const entredDescription = descriptionInputRef.current.value;
    console.log(entredTitle);

    if (
      entredTitle === "" ||
      entredAddress === "" ||
      entredDescription === ""
    ) {
      setModalIsOpen(true);
      return;
    }

    const meetupData = {
      title: entredTitle,
      Image: entredImage,
      address: entredAddress,
      description: entredDescription,
    };

    addMeetup(meetupData);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label className="form-label">Meetup Title</label>
          <input type="text" className="form-control" ref={titleInputRef} />
        </div>
        <div className="mb-3">
          <label className="form-label">Meetup Image</label>
          <input type="url" className="form-control" ref={imageInputRef} />
        </div>
        <div className="mb-3">
          <label className="form-label">Meetup Address</label>
          <input type="text" className="form-control" ref={addressInputRef} />
        </div>
        <div className="mb-3">
          <label className="form-label">Meetup Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            ref={descriptionInputRef}
          ></textarea>
          <button className="btn btn-success">Add Meetup</button>
        </div>
      </form>
      {modalIsOpen ? <Modal onClose={closeModal} /> : ""}
      {modalIsOpen ? <Backdrop onClose={closeModal} /> : ""}
    </div>
  );
};

export default NewMeetupForm;
