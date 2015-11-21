$( "a" ).click(function() {
  $( "div" ).fadeIn( 100, function() {
    $( "span" ).fadeIn( 25 );
  });
  return false;
});