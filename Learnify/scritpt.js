// ========================
// DOMContentLoaded: Initialize all functionalities
// ========================
document.addEventListener("DOMContentLoaded", () => {
  // ---------- ELEMENTS ----------
  const buttons = document.querySelectorAll(".sidebar-btn");
  const sections = document.querySelectorAll(".content-section");
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebarToggle");
  const darkBtn = document.getElementById("darkModeBtn");

  // ---------- HELPER FUNCTIONS ----------
  const resetActive = () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    sections.forEach((sec) => sec.classList.remove("active"));
  };

  const toggleSidebar = () => sidebar.classList.toggle("show");
  const closeSidebar = () => sidebar.classList.remove("show");

  // ---------- SIDEBAR BUTTON CLICK ----------
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetClass = button.dataset.target;
      const targetSection = document.querySelector("." + targetClass);
      if (!targetSection) return;

      resetActive();
      button.classList.add("active");
      targetSection.classList.add("active");

      // Auto-close sidebar on mobile
      if (window.innerWidth < 992) closeSidebar();
    });
  });

  // ---------- SIDEBAR TOGGLE (HAMBURGER) ----------
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSidebar();
    });

    // Click outside sidebar closes it
    document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        closeSidebar();
      }
    });
  }

  // ---------- DARK MODE TOGGLE ----------
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }

  // ---------- REMEMBER THEME ----------
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

// ========================
// LOADER
// ========================
window.addEventListener("load", () => {
  const loader = document.getElementById("pageLoader");
  if (!loader) return;

  // Optional: keep loader at least 1s for smooth effect
  const minTime = 1000;
  const elapsed = performance.now();
  const hideLoader = () => {
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 500);
  };
  setTimeout(hideLoader, minTime);
});





// editor run code 
// Function to run code in the iframe
function lcRunCode() {
  const code = document.getElementById("lcCodeInput").value; // get code from textarea
  const iframe = document.getElementById("lcOutputFrame");    // get the iframe

  // Use srcdoc to render the code inside iframe
  iframe.srcdoc = code;
}
