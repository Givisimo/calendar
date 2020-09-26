import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import recordDate from '../../redux/actions/actions';
import calcCalendarDates from '../../utils/calendar/calendar';
import allMonths from '../../utils/months';
import days from '../../utils/days';
import './Calendar.scss';

const Calendar = ({ recordDate }) => {
  const [showModal, setShowModal] = useState(false);

  const changeModalState = () => {
    setShowModal(prevState => !prevState);
  };

  const [newMonth, setNewMonth] = useState(new Date().getMonth());

  const [newYear, setNewYear] = useState(new Date().getFullYear());

  const clickDay = event => {
    const month =
      Number(event.target.getAttribute(`month-index`)) === newMonth
        ? newMonth
        : Number(event.target.getAttribute(`month-index`));
    recordDate(event.target.innerHTML, event.target.id, month);
    changeModalState();
  };

  const month = calcCalendarDates(newYear, newMonth);
  const weeks = [
    [...month.splice(0, 7)],
    [...month.splice(0, 7)],
    [...month.splice(0, 7)],
    [...month.splice(0, 7)],
    [...month.splice(0, 7)],
    [...month.splice(0, 7)],
  ];

  const calcNextMonth = () =>
    setNewMonth(prevState => {
      return prevState === 11 ? 0 : prevState + 1;
    });

  const calcPrevMonth = () => {
    setNewMonth(prevState => {
      return prevState === 0 ? 11 : prevState - 1;
    });
  };

  const calcNextYear = () => {
    return newMonth === 11 ? setNewYear(prevState => prevState + 1) : null;
  };

  const calcPrevYear = () => {
    return newMonth === 0 ? setNewYear(prevState => prevState - 1) : null;
  };

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
    <div className="calendar-wrapper">
      <div className="head-wrapper d-flex text-nowrap justify-content-between">
        <button className=" btn-wrapper  " onClick={calcPrevRender}>
          &#60;
        </button>
        <div className="text-center calendar-heading ">{`${
          allMonths[newMonth]
        } ${newYear}`}</div>
        <button className=" btn-wrapper  " onClick={calcNextRender}>
          &#62;
        </button>
      </div>
      <div className="">
        <div className="dates-container" onClick={event => clickDay(event)}>
          {weeks.map((arr, indexWeeks) => {
            return (
              <div className="d-flex justify-content-between " key={uuidv4()}>
                {arr.map(({ date, outsideRange }, index) => {
                  return (
                    <div
                      className={`text-center cell align-items-center ${
                        outsideRange ? 'calendar-day-outside' : 'calendar-day'
                      }`}
                      key={uuidv4()}
                      id={index}
                      month-index={calcMonthIndex(indexWeeks, outsideRange)}
                    >
                      {date}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="weekday-row d-flex justify-content-between">
          {weeks[0].map((__, i) => (
            <div
              className="text-center cell d-flex align-items-center justify-content-center"
              key={uuidv4()}
            >
              {days[i].short}
            </div>
          ))}
        </div>
      </div>
      {showModal && <Modal setShowModal={changeModalState} />}
    </div>
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
