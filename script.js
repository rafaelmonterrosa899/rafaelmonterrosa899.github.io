
// Mobile nav
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Copy email
const copyBtn = document.getElementById("copyEmail");
const toast = document.getElementById("toast");

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.dataset.email || "";
    try {
      await navigator.clipboard.writeText(email);
      toast.textContent = "Email copied ✅";
      setTimeout(() => (toast.textContent = ""), 1600);
    } catch {
      toast.textContent = "Couldn’t copy. Please copy manually.";
      setTimeout(() => (toast.textContent = ""), 2000);
    }
  });
}