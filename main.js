var roll = document.getElementById("roll");

var min = 1;
var max = 24;

roll.onclick = function () {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);

  cube.style.webkitTransform = "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
  cube.style.transform = "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
};

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}
