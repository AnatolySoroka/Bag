export function initBurger() {
  const body = document.body;
  const html = document.documentElement;
  const burger = document.querySelector(".burger");

  let scrollPosition = 0;
  let scrollbarWidth = 0;

  function lockScroll() {
    scrollPosition = window.scrollY;

    // ✅ рахуємо ширину скролбару
    scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.width = "100%";

    // ✅ компенсація, щоб контент не стрибав
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    html.classList.add("menu-open");
  }

  function unlockScroll() {
    body.style.position = "";
    body.style.top = "";
    body.style.width = "";
    body.style.paddingRight = "";

    window.scrollTo(0, scrollPosition);

    html.classList.remove("menu-open");

    // 🔥 синхронізація з sticky header
    if (window.resetHeaderScrollState) {
      window.resetHeaderScrollState();
    }
  }

  burger.addEventListener("click", () => {
    const isOpen = burger.classList.toggle("is-open");

    if (isOpen) {
      lockScroll();
      body.classList.add("active");
    } else {
      body.classList.remove("active");
      unlockScroll();
    }
  });
}
