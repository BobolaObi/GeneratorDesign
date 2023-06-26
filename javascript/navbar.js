
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const close = document.querySelector(".close");
const pageWrap = document.querySelector('.page-wrap');


hamburger.addEventListener("click", function () {
  navLinks.style.display =
    navLinks.style.display === "none" ? "flex" : "none";
    pageWrap.classList.add('disable-pointer');
});

close.addEventListener("click", function () {
  navLinks.style.display = "none";
  pageWrap.classList.remove('disable-pointer');
});

// Event listener for window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex";
    pageWrap.classList.remove('disable-pointer');
  } else if (
    window.innerWidth <= 768 &&
    navLinks.style.display === "flex"
  ) {
    navLinks.style.display = "none";
    pageWrap.classList.remove('disable-pointer');
  }
});


