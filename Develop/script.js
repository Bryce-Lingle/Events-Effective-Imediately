// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var todaysDate = document.getElementById('currentDay')
var saveBtn = $('.saveBtn')
var plan = $('#text-area')
//var blockHour; 
var currentHour = dayjs().format()


//Display todays date
var todaysDate = dayjs();
$('#currentDay').text(todaysDate.format('dddd, MMMM D, YYYY'))


$(function () {
  saveBtn.on('click', function() {
    var plan = $(this).siblings('#text-area').val();
    var key = $(this).parent().attr('id')
    localStorage.setItem(key,plan);
    console.log(plan)
  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //For day js - dayjs().hour()
$('.time-block').each(function (){
  var blockHour = parseInt($(this).attr('id').split('-')[1]);
  var currentTime = dayjs().hour(); 
  // var blockHour = $(this).attr('id').split('-')[1]
 if (blockHour < currentTime) {
    $(this).removeClass("present future") .addClass('past');
  } else if (blockHour === currentTime){
    $(this).removeClass('future past').addClass('present');
  }else if (blockHour > currentTime) {
    $(this).removeClass('past present').addClass('future');
  }
  // console.log(blockHour)
  // console.log(currentTime)
})  
 
  //THIS IS THE IF ELSE FOR CLASSES, I NEED TO SEE IF IT WILL WORK OR NOT LATER

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

$('#hour-9 #text-area').val(localStorage.getItem('hour-9'))

});

//Questions:
//M<y save button is only working for the first button. How do I tie 'this' into it to make each button work?
//I have currentTime set for 24 hour clock. How do I compare it to the blockHour which is representative of the div id's "hour-X"?
//How do I get the elements from local storage in order to pull up my to do's when the page is loaded? 




  




  
  
