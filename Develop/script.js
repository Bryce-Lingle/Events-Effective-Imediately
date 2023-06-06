// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var todaysDate = document.getElementById('currentDay')
var saveBtn = $('.saveBtn')
var plan = $('#text-area')
var blockHour = $('hour-9 hour-10 hour-11 hour-12 hour-1 hour-2 hour-3 hour-4 hour-5')
var currentHour = dayjs().format()



//Display todays date
var todaysDate = dayjs();
$('#currentDay').text(todaysDate.format('dddd, MMMM D, YYYY'))


$(function () {
 //Button command so that the click effect works and saves to local storage.... STILL GETTING UNDEFINED 
  saveBtn.on('click', function() {
    var plan = $('#text-area').val();
    localStorage.setItem('',plan);
    console.log(plan.val)
  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  if (blockHour < currentHour) {
    $(this).removeClass("present future") .addClass('past');
  } else if (blockHour === currentHour){
    $(this).removeClass('future past').addClass('present');
  }else if (blockHour > currentHour) {
    $(this).removeClass('past present').addClass('future');
  }
  


//Button command so that the click effect works


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //
  // TODO: Add code to display the current date in the header of the page.


});






  




  
  
