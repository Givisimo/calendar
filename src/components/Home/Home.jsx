import React from 'react';
import Calendar from '../Calendar/Calendar';
import './Home.scss';

const Home = () => {
  return (
    <div className="container-fluid no-gutters">
      <div className="row">
        <div className="col-8 justify-content-end row page-wrapper no-gutters">
          <div className="text-wrapper">
            <h3 className="text-heading text-uppercase font-weight-bold">
              Choose the day
              <br /> for the meeting
            </h3>
            <p className="text-wrap text-right font-weight-light text-text">
              We encourage you to book your appointment online. <br /> This will
              save you time.
            </p>
          </div>
        </div>
        <div className=" col-4 no-gutters custom">
          <div className="calendar-wrapper">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
