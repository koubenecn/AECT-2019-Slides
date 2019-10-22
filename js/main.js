import { CountUp } from '/CountUp.min.js';

window.onload = function() {
  var countUp = new CountUp('target', 2000);
  countUp.start();
}