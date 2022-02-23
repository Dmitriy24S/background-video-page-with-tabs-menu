// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 249) {
    nav.classList.add("fixed-nav");
    scrollTopBtn.classList.add("show-link");
  }
});

// video
const video = document.querySelector(".video-container");
const videoToggle = document.querySelector(".switch-btn");

videoToggle.addEventListener("click", () => {
  if (!videoToggle.classList.contains("slide")) {
    videoToggle.classList.add("slide");
    video.pause();
  } else {
    videoToggle.classList.remove("slide");
    video.play();
  }
});

const starttime = 0; // start at 0 seconds
const endtime = 13; // stop at 13 seconds

function playVideo() {
  video.addEventListener(
    "timeupdate",
    function () {
      if (this.currentTime >= endtime) {
        this.currentTime = 0; // change time index here
      }
    },
    false
  );
  video.load();
  video.play();
}
playVideo();
