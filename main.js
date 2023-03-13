// You could easily add more colors to this array.




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

/*scrool*/

gsap.from(".btn-dropdown", {
  opacity: 1, 
  y: -80,
  duration: 1.5,
  delay: 0,
});

gsap.from(".c1", {
  opacity: 1, 
  y: 80,
  duration: 0.5,
  delay: 0,
});

gsap.from(".c2", {
  opacity: 1, 
  y: 80,
  duration: 0.5,
  delay: 0.25,
});

gsap.from(".c3", {
  opacity: 1, 
  y: 80,
  duration: 0.5,
  delay: 0.5,
});

gsap.from(".c4", {
  opacity: 1, 
  y: 80,
  duration: 0.5,
  delay: 0.75,
});

gsap.from(".c5", {
  opacity: 1, 
  y: 80,
  duration: 0.5,
  delay: 1,
});

gsap.from(".trai", {
  opacity: 1, 
  x: -350,
  duration: 1,
  delay: 0,
});

gsap.from(".phai", {
  opacity: 1, 
  y: 200,
  duration: 1,
  delay: 0,
});

gsap.from(".s1", {
  opacity: 1, 
  x: 400,
  duration: 1,
  delay: 0,
});

gsap.from(".s2", {
  opacity: 1, 
  x: 400,
  duration: 1,
  delay: 0.25,
});

gsap.from(".s3", {
  opacity: 1, 
  x: 400,
  duration: 1,
  delay: 0.5,
});

gsap.from(".s4", {
  opacity: 1, 
  x: 400,
  duration: 1,
  delay: 0.75,
});

gsap.from(".s5", {
  opacity: 1, 
  x: 400,
  duration: 1,
  delay: 1,
});


