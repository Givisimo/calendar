import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import months from '../../utils/calendar/months';
import days from '../../utils/calendar/days';
import { connect } from 'react-redux';
import { getDate, getDay, getMonth } from '../../redux/selector/selector';
import './Modal.scss';

const MODAL_ROOT = document.querySelector('#modal-root');

function Modal({ date, month, day, setShowModal }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  const handleKeyPress = e => {
    if (e.code === 'Escape') {
      setShowModal();
    }
  };

  const backdropRef = useRef();

  const handleBackdropClick = e => {
    if (e.target === backdropRef.current) {
      setShowModal();
    }
  };

  return createPortal(
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      role="presentation"
      className="overlay"
    >
      <form className="modal-custom">
        <button type="button" className="button-exit" onClick={setShowModal}>
          &#215;
        </button>
        <div className=" row ">
          <label className="col label-style p-0 mr-2" htmlFor="month">
            Month
          </label>

          <label className="col label-style p-0" htmlFor="date">
            Day
          </label>
        </div>
        <div className="row ">
          <input
            type="text"
            id="month"
            className=" input-style col pr-0 mr-2"
            value={months[month]}
            readOnly
            disabled
          />
          <input
            type="text"
            id="date"
            className=" input-style col pr-0"
            value={`${date}th ${days[day].long}`}
            readOnly
            disabled
          />
        </div>
      </form>
    </div>,
    MODAL_ROOT,
  );
}
const mapStateToProps = state => {
  return { date: getDate(state), day: getDay(state), month: getMonth(state) };
};

export default connect(
  mapStateToProps,
  null,
)(Modal);
