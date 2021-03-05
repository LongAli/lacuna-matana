//var activities = require('../activites.json');

var timeVal = parseInt(document.getElementById('timer').textContent.substr(0, 2));
//console.log(timeVal);

function timer() {
	var countdownTime = timeVal * 60;
	var time = countdownTime,
		minutes,
		seconds;
	//console.log(time);
	var x = setInterval(function() {
		minutes = parseInt(time / 60, 10);
		console.log('minutes' + minutes);
		seconds = parseInt(time % 60, 10);

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		document.querySelector('#timer').textContent = minutes + ':' + seconds;

		if (--time < 0) {
			time = 0;
		}
	}, 1000);
}

var button = document.querySelector('#primary');
button.addEventListener('click', timer);
