function clock(id) {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array(
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
    );
    d = date.getDate();
    day = date.getDay();
    days = new Array(
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    );
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    result = h + ":" + m + ":" + s;
    document.getElementById(id).innerHTML = result;
    setTimeout('clock("' + id + '");', "1000");
    return true;
}

function ko_date_time(id) {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array(
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
    );
    d = date.getDate();
    day = date.getDay();
    days = new Array(
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    );
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    result =
        year + "년 " + "" + days[day] + " " + months[month] + " " + d + "일";
    document.getElementById(id).innerHTML = result;
    setTimeout('ko_date_time("' + id + '");', "1000");
    return true;
}

function en_date_time(id) {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array(
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    );
    d = date.getDate();
    day = date.getDay();
    days = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Sat", "Sun");
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    result = days[day] + " , " + months[month] + " " + d + " , " + year;
    document.getElementById(id).innerHTML = result;
    setTimeout('en_date_time("' + id + '");', "1000");
    return true;
}
