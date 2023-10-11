// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  //let saveButton = document.querySelector('.saveBtn')
  //let tasks = document.querySelector('textarea')
  // Event listener for save button and saves to local storage when clicked
  $('.saveBtn').on('click', () => {
    const hour = $(this).data('hourNum');
    const toDo = $(`input`).val();
    localStorage.setItem('hour',toDo);
  })
  //
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
  // Displays the current date & Time in the header of the page
  let currentTime = dayjs().format('MMM D, YYYY (hh:mm:ss)');
  $('#currentDay').text(currentTime);
});
