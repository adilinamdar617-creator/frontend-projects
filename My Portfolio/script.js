/* ===== REVEAL ON SCROLL ===== */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 },
);

reveals.forEach((el) => observer.observe(el));

/* ===== TABS ===== */

function opentab(tabname) {
  const tablinks = document.querySelectorAll(".tab-links");
  const tabcontents = document.querySelectorAll(".tab-content");

  tablinks.forEach((link) => link.classList.remove("active-link"));
  tabcontents.forEach((tab) => tab.classList.remove("active-tab"));

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/* ===== NAVBAR SCROLL ===== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "#000";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});
