
$('#currentDay').append(moment().format('MMM Do YYYY'));

var currentHour = moment().format('h');
// console.log(currentTime);

// So the hours know which hours they are
// var nineAM = $('#9AM');

var nineAm = moment().set('h', 6);

    console.log(nineAm);

    console.log(nineAm == currentHour);

    console.log(currentHour);












// var currentDate = moment().format('MMM Do YYYY');
// var currentDayE1 = $('#currentDay');

// currentDayE1.text(currentDate);



















