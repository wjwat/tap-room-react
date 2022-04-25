import React from "react";
import PropTypes from 'prop-types';

function Modal({ beer, onDeleteBeer, onShowModal }) {
  const handleDeleteBeer = (beer, onDeleteBeer, onShowModal) => {
    onDeleteBeer(beer);
    onShowModal(false);
  }

  return (
    <>
    <div className="modal_background">
      <div className="modal">
        <div className="modal_content">
          <p>Are you sure you want to delete {beer.name}?</p>
          <button
            type="button"
            onClick={() => handleDeleteBeer(beer, onDeleteBeer, onShowModal)}
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => {onShowModal(false)}}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

Modal.propTypes = {
  beer: PropTypes.object,
  onDeleteBeer: PropTypes.func,
  onShowModal: PropTypes.func
}

export default Modal;
