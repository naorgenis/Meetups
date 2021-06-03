import "../../App.css";

const Modal = (props) => {
  return (
    <div className="modal-meetup">
      <p>Please complete fll the meetup form </p>
      <button className="btn btn-secondary" onClick={props.onClose}>
        OK
      </button>
    </div>
  );
};

export default Modal;
