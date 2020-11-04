const clock = document.querySelector('.clock');

const moment = () => { 
    const now = new Date();
    const hh = now.getHours();
    const mm = now.getMinutes();
    const ss = now.getSeconds();
    const digitalClock = `<h1><span>${hh}</span> : <span>${mm}</span> : <span>${ss}</span></h1>`;
    clock.innerHTML=digitalClock;
 };


setInterval(moment , 1000);