// Use Day.js to format the date and assign to the declared variable.


// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
const gradDate = dayjs('2024-09-12').format('MMM D, YYYY');
$('#1a').text(gradDate);

// or
// $('#1a').text(dayjs('2024-09-12').format('MMM D, YYYY'));

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)

const dayWeek = dayjs('01-01-2027', 'M-D-YYYY').format('dddd');
$('#2a').text(dayWeek);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
const reformatDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
$('#3a').text(reformatDate);

// TODO: 4. What is the current Unix timestamp?
$('#4a').text(dayjs().unix());


// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

$('#5a').text(dayjs.unix(1318781876).format('MMM D, YYYY'));
$('#5b').text(dayjs.unix(1318821876).format('MMM D, YYYY, hh:mm:ss a'));

// $('#5a').text(dayjs.unix('1318781876').format('MMM D, YYYY, hh:mm:ss a'));
// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

const targetDay = dayjs('2027-05-04');
$('#6a').text(targetDay.diff(dayjs(), 'days'));