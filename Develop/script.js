// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var todaysDate = document.getElementById('currentDay')
var saveBtn = $('.saveBtn')
var plan = $('#text-area') 
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

$('#hour-10 #text-area').val(localStorage.getItem('hour-10'))

$('#hour-11 #text-area').val(localStorage.getItem('hour-11'))

$('#hour-12 #text-area').val(localStorage.getItem('hour-12'))

$('#hour-13 #text-area').val(localStorage.getItem('hour-13'))

$('#hour-14 #text-area').val(localStorage.getItem('hour-14'))

$('#hour-15 #text-area').val(localStorage.getItem('hour-15'))

$('#hour-16 #text-area').val(localStorage.getItem('hour-16'))

$('#hour-17 #text-area').val(localStorage.getItem('hour-17'))


});





  




  
  
