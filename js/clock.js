function clock(id) {
  const date = new Date();
  let ampm = 'AM';
  d = date.getDate();
  h = date.getHours();
  if (h < 10) {
    h = `0${h}`;
  }
  m = date.getMinutes();
  if (m < 10) {
    m = `0${m}`;
  }
  s = date.getSeconds();
  if (s < 10) {
    s = `0${s}`;
  }
  if (h >= 12) {
    ampm = 'PM';
  }
  result = `${h}:${m}:${s} ${ampm}`;
  document.getElementById(id).innerHTML = result;
  setTimeout(`clock("${id}");`, '1000');
  return true;
}

function ko_date_time(id) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const months = new Array(
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  );
  d = date.getDate();
  day = date.getDay();
  days = new Array(
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  );
  h = date.getHours();
  if (h < 10) {
    h = `0${h}`;
  }
  m = date.getMinutes();
  if (m < 10) {
    m = `0${m}`;
  }
  s = date.getSeconds();
  if (s < 10) {
    s = `0${s}`;
  }
  result = `${year}년 ${months[month]} ${d}일 ${days[day]}`;
  document.getElementById(id).innerHTML = result;
  setTimeout(`ko_date_time("${id}");`, '1000');
  return true;
}

function en_date_time(id) {
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth();
  months = new Array(
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  );
  d = date.getDate();
  day = date.getDay();
  days = new Array(
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  );
  h = date.getHours();
  if (h < 10) {
    h = `0${h}`;
  }
  m = date.getMinutes();
  if (m < 10) {
    m = `0${m}`;
  }
  s = date.getSeconds();
  if (s < 10) {
    s = `0${s}`;
  }
  result = `${days[day]}, ${months[month]} ${d}, ${year}`;
  document.getElementById(id).innerHTML = result;
  setTimeout(`en_date_time("${id}");`, '1000');
  return true;
}
