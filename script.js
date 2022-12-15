var timeDisplayEl = $('#time-display');

console.log(dayjs().format('H'));

$('.time-block').each(function() {
  var currentHour = dayjs().format('H');
  var blockHour = parseInt($(this).attr("id"));

  if(blockHour < currentHour)
  {
    $(this).addClass("past");
  }
  else if(blockHour === currentHour)
  {
    $(this).removeClass("past");
    $(this).addClass("present");
  }
  else{
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
})

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  
  displayTime();
  setInterval(displayTime, 1000)

$(document).on("click", ".saveBtn", function(){

  var note = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");

  localStorage.setItem(hour, note);
});

for(var i=9; i<=14;i++)
{
  $("#"+i+" .description").val(localStorage.getItem(i));
}
