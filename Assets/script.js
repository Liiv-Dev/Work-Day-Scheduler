// ensures that the code isn't run until the browser has finished rendering all the elements in the html.
$(document).ready(function() {

  // Displays the current date & Time in the header of the page
  let currentTime = dayjs().format('MMM D, YYYY (hh:mm:ss)');
  $('#currentDay').html(currentTime);

    // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function scheduleColorChange () {
    const currentHour = dayjs().hour()
    for (let i=9; i<= 17; i++) {
      if (i < currentHour) {
        $(`textarea[data-hour="${i}"]`).addClass('past')
      } else if (i === currentHour) {
        $(`textarea[data-hour="${i}"]`).addClass('present')
      } else {
        $(`textarea[data-hour="${i}"]`).addClass('future')
      }
    }
  }

  // Event listener for save button and saves to local storage when clicked
  $('.saveBtn').on('click', () => {

    const hour = $(this).parent().attr('id');
    const toDo = $(`input`).val();

    localStorage.setItem('${hour}',toDo);

    //alert('Task Saved!')
    alert('Task Saved!')
  })
  //

});
