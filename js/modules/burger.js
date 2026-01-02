export function initBurger() {
  const body = document.body;
  const burger = document.querySelector(".burger");

  let scrollPosition = 0;

  function lockScroll() {
    scrollPosition = window.scrollY;

    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.width = "100%";

    document.documentElement.classList.add("menu-open");
  }

  function unlockScroll() {
  body.style.position = "";
  body.style.top = "";
  body.style.width = "";

  window.scrollTo(0, scrollPosition);

  document.documentElement.classList.remove("menu-open");

  // 🔥 ОЦЕ ГОЛОВНЕ
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
