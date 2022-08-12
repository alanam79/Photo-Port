import React from "react";

// destructuring props into current photo
function Modal({ onClose, currentPhoto }) {
  // destructure currentPhoto properties into constants to assign their values into the modal
  const { name, category, description, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>{description}</p>
        {/* added onclose function to click event listener/button */}
        <button onClick={onClose} type="button">
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
