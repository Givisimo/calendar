import React from 'react';
import Modal from '../Modal/Modal';

import { v4 as uuidv4 } from 'uuid';

import allMonths from '../../utils/calendar/months';
import days from '../../utils/calendar/days';
import './Calendar.scss';

const Calendar = ({
  onDayClick,
  calcPrevRender,
  calcNextRender,
  calcMonthIndex,
  changeModalState,
  showModal,
  weeks,
  month,
}) => {
  return (
    <div className="calendar-wrapper">
      <div className="head-wrapper d-flex  justify-content-between align-items-center">
        <button className=" btn-wrapper  " onClick={calcPrevRender}>
          &#60;
        </button>
        <div className=" calendar-heading ">{`${allMonths[month]} `}</div>
        <button className=" btn-wrapper  " onClick={calcNextRender}>
          &#62;
        </button>
      </div>
      <div>
        <div className="dates-container" onClick={event => onDayClick(event)}>
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

export default Calendar;
