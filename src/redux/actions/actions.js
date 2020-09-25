const recordDate = (date, day, month) => {
  return {
    type: 'RECORD_DATE',
    payload: { date, day, month },
  };
};
export default recordDate;
