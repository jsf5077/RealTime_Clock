const secondHand = document.querySelector(`.handSec`);
const minuteHand = document.querySelector(`.handMin`);
const hourHand = document.querySelector(`.handHour`);


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360);
    const minutesDegrees = ((minutes / 60) * 360);
    const hoursDegrees = ((hours / 60) * 360);


    secondHand.style.transform=`rotate(${secondsDegrees}deg)`
    minuteHand.style.transform=`rotate(${minutesDegrees}deg)`
    hourHand.style.transform=`rotate(${hoursDegrees}deg)`


}

setInterval (setDate, 1000);