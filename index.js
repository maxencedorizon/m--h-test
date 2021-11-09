//transform seconds into minutes / hours / days for vanebot or other work the seconds var can be remplaced by a time like UTC what you want

var seconds = 0;
var minutes = 0;
var hours = 0;
var days = 0;

timer=setInterval(function() {
  console.log(`${seconds} s, ${minutes} m, ${hours} h, ${days} d`);
  seconds++

  if(seconds == 60) {
    seconds = 0;
    minutes++

  } if(minutes == 60) {
    minutes = 0;
    hours++

  } if(hours == 24) {
    hours = 0;
    days++
  }


}, 1000);