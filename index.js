var end = new Date('10/20/2021 12:00 PM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;

function clock(){
    var now = new Date();
    var distance = end - now;
    var hours = Math.floor(distance / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    console.log('début de la clock')
    console.log(hours + ' hr restantes..');
    console.log(minutes + ' min restantes..');
    console.log(seconds + ' sec restantes..');
}

var countdownTimer = setInterval(clock, 1000);
