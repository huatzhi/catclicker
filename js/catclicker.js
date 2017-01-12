$(document).ready(function(){
  $("#cat1").click(function(){
    var currentCount = parseInt($("#click-count").html());
    $("#click-count").html(currentCount + 1);
  });
});