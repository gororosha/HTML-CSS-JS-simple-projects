const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const myBirthday = '2 Dec 2023'

function countdown(){

    const currentDate = new Date();

    const mybirthdayDate = new Date(myBirthday);

    const secondsLeft = (mybirthdayDate - currentDate) / 1000;

    const days = Math.floor(secondsLeft / 60 / 60 / 24);

    const hours = Math.floor(secondsLeft / 3600) % 24;

    const mins = Math.floor(secondsLeft / 60) % 60;

    const seconds = Math.floor(secondsLeft) % 60

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);