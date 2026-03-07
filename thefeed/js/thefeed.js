

const tile = document.getElementById("playSound");
const audio = document.getElementById("myAudio");
const label = document.getElementById("soundLabel");

tile.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    tile.classList.add("playing");
    label.textContent = "Pause Sound";
  } else {
    audio.pause();
    tile.classList.remove("playing");
    label.textContent = "Play Sound";
  }
});

document.querySelectorAll("button, a").forEach(el => {
  el.addEventListener("mouseenter", () => {
    document.body.style.cursor = 'url("img/wii-cursor-2.png") 0 0, pointer';
  });

  el.addEventListener("mouseleave", () => {
    document.body.style.cursor = 'url("img/wii-cursor-1.png") 0 0, auto';
  });
});

const clickSound = document.getElementById("clicksound");

document.querySelectorAll(".tile").forEach(tile => {
  tile.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

const button = document.getElementById("back-button");
const sound = document.getElementById("back-sound");

if (button && sound) {
  button.addEventListener("click", function(e) {

    e.preventDefault();

    sound.currentTime = 0;
    sound.play();

    setTimeout(function() {
      window.location.href = "/index.html";
    }, 400);

  });
}

document.body.style.cursor = "url('../img/wii-cursor-1.png'), auto";

// Change on hover
const tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => {
    tile.addEventListener('mouseenter', function() {
        this.style.cursor = "url('../img/wii-cursor-1.png'), pointer";
    });
});