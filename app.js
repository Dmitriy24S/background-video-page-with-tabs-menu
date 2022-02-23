// Preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 249) {
    nav.classList.add("fixed-nav");
    scrollTopBtn.classList.add("show-link");
  }
});

// Video
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

// Dynamic open nav menu height
const navLinksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  if (navLinksContainer.getBoundingClientRect().height === 0) {
    navLinksContainer.style.height = navLinks.getBoundingClientRect().height + "px";
  } else {
    navLinksContainer.style.height = 0 + "px";
  }
});

// Show nav on scroll & scroll to top btn
const nav = document.querySelector("#nav");
const scrollTopBtn = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  var scroll = window.scrollY;
  if (scroll > 50) {
    nav.classList.add("fixed-nav");
    // scrollTopBtn.style.visibility = "visible";
    scrollTopBtn.classList.add("show-link");
  } else {
    nav.classList.remove("fixed-nav");
    // scrollTopBtn.style.visibility = "hidden";
    scrollTopBtn.classList.remove("show-link");
  }
  if (scroll < 10) {
    nav.classList.remove("fixed-nav");
  }
});
