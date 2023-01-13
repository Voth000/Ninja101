// You could easily add more colors to this array.
var colors = [ '#9cfe2ce2', 'rgb(244 61 192 / 87%)', '#9cfe2ce2'];
var boxes = document.querySelectorAll(".");

for (i = 0; i < boxes.length; i++) {
  // Pick a random color from the array 'colors'.
  boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
}


var colors = [
  "#E565A6", 
  "#00BCF2", 
  "#FFF233", 
  "#F24E3E",
  "#FF7E5C",
  "#F23EE2",
  "#1792F2",
  "#BDA8FF"

];

  var currentColor = 0
  var lis = document.querySelectorAll(".btn5")
  function changeColor() {
    --currentColor
    if (currentColor < 0) currentColor = colors.length -1
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.backgroundColor = colors[(currentColor +i) % colors.length]
    }
  }
  setInterval(changeColor, 1000)

/* Separate your event handling code from your markup */


window.addEventListener("load", startup, false);

function startup() {
  // Get the reference to video
  const video = document.getElementById("video1");

  // On pressing ENTER call toggleFullScreen method
  document.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      toggleFullScreen(video);
    }
  }, false);
}

function toggleFullScreen(video) {
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    video.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}