var todaysDate = document.getElementById('currentDay')
var saveBtn = $('.saveBtn')
var plan = $('#text-area') 
var currentHour = dayjs().format()


//This Displays todays date at the top of the page
var todaysDate = dayjs();
$('#currentDay').text(todaysDate.format('dddd, MMMM D, YYYY'))


$(function () {
  //This is te save button funciton that sets plan (which is tied to the specfic id of text-area, and the key value which is specifically tied to its parent attribute of id and saves the value inputed to local storage.)
  saveBtn.on('click', function() {
    var plan = $(this).siblings('#text-area').val();
    var key = $(this).parent().attr('id')
    localStorage.setItem(key,plan);
    console.log(plan)
  })

$('.time-block').each(function (){
  //variable tied to turning each string number (hour - 9) and turning the number into an intiger. The string also needed to be split in order to specifically define the number.
  var blockHour = parseInt($(this).attr('id').split('-')[1]);
  //The varaible tied to the current hour on a 24 hour clock. 
  var currentTime = dayjs().hour(); 
  // This is the code for turing the number into text rather than part of an array and tying making it an intiger
  // var blockHour = $(this).attr('id').split('-')[1]

  //This is the code for changing the background color based on current time (defined above) and block hour (defined above)
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
 
//This is the code that gets each value inputed to local storge previously. It is tied to the ID in each div, then dives futher to spcify the ID text area within that hour block. 

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





  




  
  
