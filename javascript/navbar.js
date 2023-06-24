
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

// Add an event listener for window resize
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

// Accordion Script
function toggleContent(id) {
  const content = document.getElementById(id);
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  } 
}
