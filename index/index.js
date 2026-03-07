const button = document.getElementById("start-button");
const sound = document.getElementById("start-sound");

button.addEventListener("click", function(e) {

  e.preventDefault();

  sound.currentTime = 0;
  sound.play();

  setTimeout(function() {
    window.location.href = "thefeed/thefeed.html";
  }, 400);

});

