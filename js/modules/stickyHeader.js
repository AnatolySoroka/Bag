export function initStickyHeader() {
  const header = document.querySelector(".header");

  let lastScrollY = window.scrollY;
  let ignoreNextScroll = false;

  window.addEventListener("scroll", () => {
    if (ignoreNextScroll) {
      lastScrollY = window.scrollY;
      ignoreNextScroll = false;
      return;
    }

    if (document.documentElement.classList.contains("menu-open")) {
      lastScrollY = window.scrollY;
      return;
    }

    const current = window.scrollY;

    if (current <= 0) {
      header.classList.remove("is-hidden", "is-visible");
      lastScrollY = current;
      return;
    }

    if (current > lastScrollY) {
      header.classList.add("is-hidden");
      header.classList.remove("is-visible");
    } else {
      header.classList.remove("is-hidden");
      header.classList.add("is-visible");
    }

    lastScrollY = current;
  });

  // ✅ API для інших скриптів
  window.resetHeaderScrollState = () => {
    ignoreNextScroll = true;
    lastScrollY = window.scrollY;
  };
}
