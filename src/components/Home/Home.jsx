import React from 'react';
import CalendarContainer from '../Calendar/CalendarContainer';
import './Home.scss';

const Home = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row">
        <div className="col-12  col-lg-7 justify-content-end row page-wrapper  m-0">
          <div className="text-wrapper">
            <h3 className="text-heading text-uppercase font-weight-bold ">
              Choose the day
              <br /> for the meeting
            </h3>
            <p className="text-wrap text-right font-weight-light text-text">
              We encourage you to book your appointment online. <br /> This will
              save you time.
            </p>
          </div>
        </div>
        <div className=" col-12 col-lg-5 custom">
          <CalendarContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
