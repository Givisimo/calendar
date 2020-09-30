import React, { useState } from 'react';
import { connect } from 'react-redux';
import recordDate from '../../redux/actions/actions';
import calcCalendarDates from '../../utils/calendar/calcCalendarDates';
import Calendar from './Calendar';
import Modal from '../Modal/Modal';

const CalendarContainer = ({ recordDate }) => {
  const [showModal, setShowModal] = useState(false);
  const changeModalState = () => setShowModal(prevState => !prevState);

  const [newMonth, setNewMonth] = useState(new Date().getMonth());
  const [newYear, setNewYear] = useState(new Date().getFullYear());

  const weeks = calcCalendarDates(newYear, newMonth);

  const onDayClick = event => {
    const month =
      Number(event.target.getAttribute(`month-index`)) === newMonth
        ? newMonth
        : Number(event.target.getAttribute(`month-index`));
    recordDate(event.target.innerHTML, event.target.id, month);
    changeModalState();
  };

  const calcNextMonth = () =>
    setNewMonth(prevState => (prevState === 11 ? 0 : prevState + 1));

  const calcPrevMonth = () => {
    setNewMonth(prevState => (prevState === 0 ? 11 : prevState - 1));
  };

  const calcNextYear = () =>
    newMonth === 11 ? setNewYear(prevState => prevState + 1) : null;

  const calcPrevYear = () =>
    newMonth === 0 ? setNewYear(prevState => prevState - 1) : null;

  const calcNextRender = () => {
    calcNextMonth();
    calcNextYear();
  };

  const calcPrevRender = () => {
    calcPrevMonth();
    calcPrevYear();
  };

  const calcMonthIndex = (indexWeeks, isOutsideRange) => {
    if (!isOutsideRange) {
      return newMonth;
    } else if (indexWeeks < 2) {
      return newMonth - 1;
    }
    return newMonth === 11 ? 0 : newMonth + 1;
  };

  return (
    <>
      <Calendar
        calcPrevRender={calcPrevRender}
        calcNextRender={calcNextRender}
        onDayClick={onDayClick}
        weeks={weeks}
        year={newYear}
        calcMonthIndex={calcMonthIndex}
        month={newMonth}
      />
      {showModal && <Modal changeModalState={changeModalState} />}
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
)(CalendarContainer);
