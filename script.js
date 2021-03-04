let countDownDate = new Date('April 5, 2021').getTime();

// document.getElementById('footer-timer').innerHTML = new Date('April, 5, 2021');

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown-days').innerHTML = days;
  document.getElementById('countdown-hours').innerHTML = hours;
  document.getElementById('countdown-minutes').innerHTML = minutes;
  document.getElementById('countdown-seconds').innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('footer-timer').innerHTML = 'Time is Now';
  }
}, 1000);

// let formTitle = document.getElementById('javascript-test');

// if (window.location.href === 'http://127.0.0.1:5500/sign-up.html') {
//   formTitle.innerHTML = 'Greatness';
// }

let tablet = matchMedia('(max-width: 700px)');

tablet.addEventListener('change', (e) => {
  console.log(e);
});
