document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordion-button");

  function closeItem(btn) {
    const id = btn.getAttribute("data-accordion");
    const panel = document.getElementById(id);
    const arrow = btn.querySelector(".arrow img");

    btn.setAttribute("aria-expanded", "false");
    panel.classList.add("hidden");
    arrow.classList.remove("rotate-180");
  }

  function openItem(btn) {
    const id = btn.getAttribute("data-accordion");
    const panel = document.getElementById(id);
    const arrow = btn.querySelector(".arrow img");

    btn.setAttribute("aria-expanded", "true");
    panel.classList.remove("hidden");
    arrow.classList.add("rotate-180");
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";

      // tutup semua dulu (UX: hanya 1 terbuka)
      buttons.forEach(closeItem);

      // kalau sebelumnya tertutup, buka
      if (!expanded) openItem(btn);
    });
  });
});
