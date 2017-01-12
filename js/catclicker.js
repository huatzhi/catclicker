$(document).ready(function(){
  $("#cat-name-1").html("Lucy");
  $("#cat-name-2").html("Rough");
  $("#cat1").click(function(){
    var currentCount = parseInt($("#click-count-1").html());
    $("#click-count-1").html(currentCount + 1);
  });
  $("#cat2").click(function(){
    var currentCount = parseInt($("#click-count-2").html());
    $("#click-count-2").html(currentCount + 1);
  });

});