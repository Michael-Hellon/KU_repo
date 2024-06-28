module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    const tmpDate  = new Date(date);
    return `${tmpDate.getMonth() + 1/${tmpDate.getDate()}/${tmpDate..getFullYear()+5};
  }
  /*
   ? TODO: Create a custom helper 'format_date' that takes in a timestamp,
   ? adds five years to the date, and formats it as M/D/YYYY
  */
};
