const initialState = {
  date: {
    date: new Date().getDate(),
    month: new Date().getMonth(),
    day: new Date().getDay(),
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECORD_DATE': {
      return {
        ...state,
        date: {
          date: action.payload.date,
          month: action.payload.month,
          day: action.payload.day,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
