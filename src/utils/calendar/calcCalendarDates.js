const isLeapYear = year => {
  const leapYear = year % 4 === 0;
  return leapYear ? 29 : 28;
};

const isShortMonth = month => {
  const shortMonth = [3, 5, 8, 10];
  return shortMonth.includes(month) ? 30 : 31;
};

const getMonthLength = (year, month) => {
  return month === 1 ? isLeapYear(year) : isShortMonth(month);
};

const startMonthDay = (year, month) => {
  return new Date(year, month).getDay();
};

const getThisMonthWithStartDay = (year, month) => {
  const monthLength = getMonthLength(year, month);
  const startDay = startMonthDay(year, month);
  return {
    startDay,
    monthLength,
  };
};

const getPrevMonthWithStartDay = (year, month) => {
  const prevMonth = month < 11 ? month - 1 : 11;
  const prevYear = month === 0 ? year - 1 : year;
  return getThisMonthWithStartDay(prevYear, prevMonth);
};

const getNextMonthWithStartDay = (year, month) => {
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  return getThisMonthWithStartDay(nextYear, nextMonth);
};

const getThreeMonths = (year, month) => {
  const thisMonth = getThisMonthWithStartDay(year, month);
  const prevMonth = getPrevMonthWithStartDay(year, month);
  const nextMonth = getNextMonthWithStartDay(year, month);
  return { thisMonth, nextMonth, prevMonth };
};

const calcCalendarDates = (year, month) => {
  const months = getThreeMonths(year, month);

  const findPrevDates = date => {
    let result = [];
    let number = months.prevMonth.monthLength;
    for (let i = date; i > 0; i--) {
      result.push({ date: number, outsideRange: true });
      number = --number;
    }
    return result.reverse();
  };

  const findNextDates = num => {
    let result = [];

    for (let i = 1; i <= num; i++) {
      result.push({ date: i, outsideRange: true });
    }
    return result;
  };

  const calendarStart = () => {
    return months.thisMonth.startDay === 0
      ? [{ date: 1, outsideRange: true }]
      : findPrevDates(months.thisMonth.startDay);
  };

  const thisMonth = () => {
    let result = [];
    let number = months.thisMonth.monthLength;
    for (let i = 1; i <= number; i++) {
      result.push({ date: i, outsideRange: false });
    }
    return result;
  };

  const calendarEnds = () => {
    let end = 42 - (thisMonth().length + calendarStart().length);
    return findNextDates(end);
  };

  const calendarDatesArr = [
    ...calendarStart(),
    ...thisMonth(),
    ...calendarEnds(),
  ];

  return [
    [...calendarDatesArr.splice(0, 7)],
    [...calendarDatesArr.splice(0, 7)],
    [...calendarDatesArr.splice(0, 7)],
    [...calendarDatesArr.splice(0, 7)],
    [...calendarDatesArr.splice(0, 7)],
    [...calendarDatesArr.splice(0, 7)],
  ];
};

export default calcCalendarDates;
