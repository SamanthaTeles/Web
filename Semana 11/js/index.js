var excluder = document.querySelector("#excluder");

document.body.onmousemove = function(ev) {
  var x = (ev.layerX - 75);
  var y = (ev.layerY - 75);
  excluder.style.cssText = "transform:translate("+x+"px, " + y + "px);background-position:" + ((x > 0)?"-":"") + Math.abs(x) + "px " + ((y > 0)?"-":"")+ Math.abs(y) + "px;";
}