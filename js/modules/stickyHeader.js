export function initStickyHeader() {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const current = window.scrollY;

    // якщо зверху
    if (current <= 0) {
      header.classList.remove("is-hidden", "is-visible");
      lastScrollY = current;
      return;
    }

    // скрол вниз
    if (current > lastScrollY) {
      header.classList.add("is-hidden");
      header.classList.remove("is-visible");
    }
    // скрол вгору
    else {
      header.classList.remove("is-hidden");
      header.classList.add("is-visible");
    }

    lastScrollY = current;
  });
}
