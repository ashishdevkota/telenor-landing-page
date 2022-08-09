const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

// hamburger.addEventListener("click", () => hamburger.classList.add("active"));

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  nav.classList.toggle("active");
});
