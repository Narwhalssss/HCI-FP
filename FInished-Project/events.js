$(document).ready(function() {
  $(".popup").hide();
});

function showPopup(el) {
  var currentText = el.innerHTML;
  var eventText = currentText.split("<br>");
  if(eventText.length > 1) {
    $("#event-text").val(eventText[1]);
  }
  $(".popup").show(500);
  $("#save-event").off("click").on("click", function(){
    var newText = $("#event-text").val();
    var date = eventText[0];
    el.innerHTML = date + "<br>" + newText;
    $(".popup").hide(500);
  });
  $("#cancel-event").off("click").on("click", function(){
    $(".popup").hide(500);
  });
}