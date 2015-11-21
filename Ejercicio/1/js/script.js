$( "#right" ).click(function() {
  $( ".block" ).animate({ "left": "+=500px" }, "fast" );
});
 
$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=500px" }, "fast" );
});