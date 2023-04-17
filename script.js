//! ========================= START OF FILE ===================================
//! Step 1: Define variables for the time, timeblock, and save buttons
let timeDisplayEl = $('#todaysDate');
let timeblock = $('#time-block');
let saveEvent = $('.saveBtn');

//! Step 2: define the function to display the current date and saving (requirement 1)
$(function() {
  $("#todaysDate").text(dayjs().format('DD MMM, YY [-] hh:mm:ss a'));

  function displayTime() {
    var hour = dayjs().format('DD MMM, YY [-] hh:mm:ss a');
    timeDisplayEl.text(hour);
  }
  setInterval(displayTime, 1000);
  displayTime();

//! Step 2.1: save events in Local Storage (requirement 4 and 5)
  $(".time-block").each(function() {
    var id = $(this).attr("id");
    var event = localStorage.getItem(id);

    if (event !== null) {
      $(this).children(".description").val(event);
    }
  });

  $(".saveBtn").on("click", function() {
    var eventId = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();

    localStorage.setItem(eventId, eventText);
  });

//! Step 3: Changing color of the timeblocks based on the time of being in the past/present/future (requirement 3)
  setInterval(changeColorTimeblocks, 1000);

  function changeColorTimeblocks() {
    var currentTime = dayjs().hour();

    $(".time-block").each(function() {
      var blockTime = parseInt($(this).attr("id"));

      if (blockTime < currentTime) {
        $(this).children(".description").addClass("past");
      }
      else if (blockTime === currentTime) {
        $(this).children(".description").removeClass("past");
        $(this).children(".description").addClass("present");
      }
      else {
        $(this).children(".description").removeClass("past");
        $(this).children(".description").removeClass("present");
        $(this).children(".description").addClass("future");
      }
    });
  }
});
//! ========================= END OF FILE =====================================