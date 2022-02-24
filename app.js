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

// Correct scroll position
const scrollLinksBtns = document.querySelectorAll(".scroll-link");

scrollLinksBtns.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinksContainer.style.height = 0 + "px";
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // get height of nav menu
    const navHeight = nav.getBoundingClientRect().height;
    const navLinksHeight = navLinks.getBoundingClientRect().height;

    const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    // if (!fixedNav) {
    //   position = position - navHeight;
    // }

    if (navHeight > 82) {
      position = position + navLinksHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// Tab btn
const tabBtns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
      const id = e.target.dataset.id;
      if (id) {
        e.target.classList.add("active");
        // hide other articles
        articles.forEach(function (article) {
          article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
      }
    });
  });
});

// footer date
const footerDate = document.querySelector("#date");

currentYear = new Date().getFullYear();
footerDate.innerHTML = currentYear;
