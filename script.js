const  daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl =  document.getElementById('mins');
const secondsEl =  document.getElementById('seconds');


const newYears = '13 Sep 2022';

countdown = () => { 
    const newYearDate =  new Date(newYears);
    const  currentdate =  new Date();
    const totalSeconds =  new Date(newYearDate - currentdate) / 1000 ; 
    const days =  Math.floor(totalSeconds  / 3600 / 24);
    const hours =  Math.floor(totalSeconds / 3600 ) % 24 ;
    const minutes =  Math.floor(totalSeconds / 60) % 60;
    const seconds =  Math.floor(totalSeconds) % 60;
   // console.log(newYearDate -  currentdate);

   daysEl.innerHTML =  days;
   hoursEl.innerHTML =  formatTime(hours);
   minsEl.innerHTML  =  formatTime(minutes);
   secondsEl.innerHTML = formatTime(seconds);
}

formatTime = (time) => {
 return time  < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);
