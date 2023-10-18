// ensures that the code isn't run until the browser has finished rendering all the elements in the html.
$(document).ready(function() {
  
  // Displays the current date & Time in the header of the page
  function updateTime() {
    const currentDate = dayjs().format('MMM D, YYYY (hh:mm:ss)')
    $('#currentDay').html(currentDate);
  }
  //Constantly updates time on page
  setInterval(updateTime, 1000);

  //Background colors change based on hour in the day. Past hours, present hours, and future hours.
  function scheduleColorChange () {
    const currentHour = dayjs().hour()
    for (let i=9; i<= 17; i++) {
      if (i < currentHour) {
        $(`textarea[data-hour="${i}"]`).addClass('past');
      } else if (i === currentHour) {
        $(`textarea[data-hour="${i}"]`).addClass('present');
      } else {
        $(`textarea[data-hour="${i}"]`).addClass('future');
      }
    }
  }
//calls color change function
scheduleColorChange()

  // Event listener for save button and saves to local storage when clicked
  //$('.saveBtn').on('click', function() {
    //const taskData = $('#taskData').val();
    //const hour = $('.hour').val();

    //localStorage.setItem(`${hour}`, taskData);
  //})
});
