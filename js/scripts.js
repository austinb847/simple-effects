$(document).ready(function() {
  $("#walrus-hidden .clickable, #walrus-showing .clickable").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $("#hide-image .clickable, #show-image .clickable").click(function(){
    $("#show-image").toggle();
    $("#hide-image").toggle();
  });
  $("#fade-image .clickable").click(function(){
    $("#guitar").fadeToggle();
    
  });
  $("#slide-image .clickable").click(function(){
    $("#guitar").slideToggle();
  })
});