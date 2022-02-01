const hh = document.getElementById("hh");
const min = document.getElementById("min");
const ss = document.getElementById("ss");

const dd = document.getElementById("dd");
const mm = document.getElementById("mm");
const yyyy = document.getElementById("yyyy");

window.onload = check();

function check(){
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    let day = data.getUTCDate();
    let month = data.getUTCMonth() + 1;
    let year = data.getFullYear();

    hh.innerHTML = hours;
    min.innerHTML = minutes;
    ss.innerHTML = seconds;
    
    dd.innerHTML = day;
    mm.innerHTML = month;
    yyyy.innerHTML = year;
    // console.log

    setInterval(check, 1000)
}

