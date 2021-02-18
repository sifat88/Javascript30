const hourBar = document.querySelector('div.hr-hand');
const minBar = document.querySelector('div.min-hand');
const secBar = document.querySelector('div.sec-hand');

function setTime(){
    const Time = new Date();
    const Hur =  Time.getHours();
    const Min =  Time.getMinutes();
    const Sec =  Time.getSeconds();
    const HurDeg = ((Hur / 60) * 360) + 90;
    const MinDeg = ((Min / 60) * 360) + 90;
    const secDeg = ((Sec / 60) * 360) + 90;
    hourBar.style.transform = `rotate(${HurDeg}deg)`;
    minBar.style.transform = `rotate(${MinDeg}deg)`;
    secBar.style.transform = `rotate(${secDeg}deg)`;
    console.log(Time)
}

setInterval(setTime, 1000)