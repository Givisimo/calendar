import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import months from '../../utils/calendar/months';
import days from '../../utils/calendar/days';
import { connect } from 'react-redux';
import { getDate, getDay, getMonth } from '../../redux/selector/selector';
import './Modal.scss';

const MODAL_ROOT = document.querySelector('#modal-root');

function Modal({ date, month, day, changeModalState }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  const handleKeyPress = e => {
    if (e.code === 'Escape') {
      changeModalState();
    }
  };

  const backdropRef = useRef();

  const handleBackdropClick = e => {
    if (e.target === backdropRef.current) {
      changeModalState();
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
        <button
          type="button"
          className="button-exit"
          onClick={changeModalState}
        >
          &#215;
        </button>
        <div className=" row no-gutters">
          <label className="col label-style p-0 mr-3" htmlFor="month">
            Month
          </label>

          <label className="col label-style p-0" htmlFor="date">
            Day
          </label>
        </div>
        <div className="row no-gutters">
          <input
            type="text"
            id="month"
            className=" input-style  pl-3 col mr-3"
            value={months[month]}
            readOnly
            disabled
          />
          <input
            type="text"
            id="date"
            className=" input-style  pl-3 col"
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
