document.addEventListener("DOMContentLoaded", () => {
  const headerLinks = document.querySelectorAll('.nav-link[href^="#"]');

  headerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = document.querySelector(".header").offsetHeight;
      const rect = target.getBoundingClientRect();
      const offset = rect.top + window.scrollY - headerHeight - 10;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    });
  });
});