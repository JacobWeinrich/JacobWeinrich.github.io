const countdown = () => {
    const countDate = new Date("April 29, 2023").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;


    const second = 1000;
    const minute = second * 60
    const hour = minute * 60;
    const day = hour * 24; 

    document.getElementById("days-counter").innerHTML = Math.floor(gap / day);

    document.getElementById("hours-counter").innerHTML = Math.floor((gap % day) / hour);
    document.getElementById("minutes-counter").innerHTML = Math.floor((gap % hour) / minute);
    document.getElementById("seconds-counter").innerHTML = Math.floor((gap % minute) / second);
};
countdown();
setInterval(countdown, 1000);