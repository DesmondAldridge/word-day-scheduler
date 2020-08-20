// DISPLAYING CURRENT DATE
$('#currentDay').append(moment().format('MMM Do YYYY'));

// THE CURRENT HOUR
var currentHour = moment().format('HH');

// THE TIME BLOCKS
var timeBlocks = $('.time-block');

// Correlating the time blocks to the specific working hours of the day
var nineAM = moment('09', 'HH').format('HH');
$('#9am').data('hour' , nineAM);

var tenAM = moment('10', 'HH').format('HH');
$('#10am').data('hour' , tenAM);

var elevenAM = moment('11', 'HH').format('HH');
$('#11am').data('hour' , elevenAM);

var twelvePM = moment('12', 'HH').format('HH');
$('#12pm').data('hour' , twelvePM);

var onePM = moment('13', 'HH').format('HH');
$('#1pm').data('hour' , onePM);

var twoPM = moment('14', 'HH').format('HH');
$('#2pm').data('hour' , twoPM);

var threePM = moment('15', 'HH').format('HH');
$('#3pm').data('hour' , threePM);

var fourPM = moment('16', 'HH').format('HH');
$('#4pm').data('hour' , fourPM);

var fivePM = moment('17', 'HH').format('HH');
$('#5pm').data('hour', fivePM);


// COLOR COORDINATION
// Thank the coding gods we learned the each function earlier this week...
function colorCoordination() {

    timeBlocks.each(function() {

      var currentBlock = $(this);
      var currentBlockMoment = currentBlock.data('hour');

      if (currentBlockMoment < currentHour) {
        currentBlock.children().addClass('past').removeClass('present future');
      }

      if (currentBlockMoment > currentHour) {
        currentBlock.children().addClass('future').removeClass('past present');
      }

      if (currentBlockMoment === currentHour) {
        currentBlock.children().addClass('present').removeClass('past future');
      }

    });
}

$(document).ready(function(){colorCoordination();})


























