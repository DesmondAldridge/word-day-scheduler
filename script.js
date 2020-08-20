// DISPLAYING CURRENT DATE
$('#currentDay').append(moment().format('MMM Do YYYY'));

// The current hour
var currentHour = moment().hour();

var timeBlocks = $('.time-block');

// So the time blocks recognize themselves as specific hours of the day... utilizing moment.js as much as possible
// Funfact: This took me 6 days to figure out

var nineAM = moment('09', 'HH').format('HH');
$('#9am').data('hour' , nineAM);
var $9am = $('#9am').data('hour');

var tenAM = moment('10', 'HH').format('HH');
$('#10am').data('hour' , tenAM);
var $10am = $('#10am').data('hour');

var elevenAM = moment('11', 'HH').format('HH');
$('#11am').data('hour' , elevenAM);
var $11am = $('#11am').data('hour');

var twelvePM = moment('12', 'HH').format('HH');
$('#12pm').data('hour' , twelvePM);
var $12pm = $('#12pm').data('hour');

var onePM = moment('13', 'HH').format('HH');
$('#1pm').data('hour' , onePM);
var $1pm = $('#1pm').data('hour');

var twoPM = moment('14', 'HH').format('HH');
$('#2pm').data('hour' , twoPM);
var $2pm = $('#2pm').data('hour');

var threePM = moment('15', 'HH').format('HH');
$('#3pm').data('hour' , threePM);
var $3pm = $('#3pm').data('hour');

var fourPM = moment('16', 'HH').format('HH');
$('#4pm').data('hour' , fourPM);
var $4pm = $('#4pm').data('hour');

var fivePM = moment('17', 'HH').format('HH');
$('#5pm').data('hour', fivePM);
var $5pm = $('#5pm').data('hour');


// Color Coordination... literally just learned about the 'each' method yesterday in class... oy, that's so helpful!
function colorCoordination() {

    timeBlocks.each(function() {

      var currentBlock = $(this);
      var currentBlockMoment = currentBlock.data('hour');

      if (currentBlockMoment < currentHour) {
        currentBlock.addClass("past").removeClass("present future");
      }
      if (currentBlockMoment > currentHour) {
        currentBlock.addClass("future").removeClass("past present");
      }

      if (currentBlockMoment === currentHour) {
        currentBlock.addClass("present").removeClass("past future");
      }

      console.log(currentBlock.data('hour'));

    });
}

$(document).ready(function(){

colorCoordination();
})


























