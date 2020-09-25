import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import Modal from '../Modal/Modal';
import { connect } from 'react-redux';
import recordDate from '../../redux/actions/actions';
import './Calendar.scss';

const Navbar = ({ onPreviousClick, onNextClick }) => {
  return (
    <div className="d-flex justify-content-between position-absolute">
      <button
        className="bg-transparent border-0 btn-wrapper"
        onClick={() => onPreviousClick()}
      >
        &#60;
      </button>
      <button
        className="bg-transparent border-0 btn-wrapper"
        onClick={() => onNextClick()}
      >
        &#62;
      </button>
    </div>
  );
};

const Calendar = ({ recordDate }) => {
  const [showModal, setShowModal] = useState(false);

  const changeModalState = () => {
    setShowModal(prevState => !prevState);
  };
  const clickDay = clickedDay => {
    recordDate(
      clickedDay.getDate(),
      clickedDay.getDay(),
      clickedDay.getMonth(),
    );
    changeModalState();
  };
  return (
    <>
      <DayPicker
        navbarElement={<Navbar />}
        showOutsideDays
        onDayClick={clickDay}
        fixedWeeks={true}
      />
      {showModal && <Modal setShowModal={changeModalState} />}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  recordDate: (date, day, month) => {
    dispatch(recordDate(date, day, month));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Calendar);
