export function initBurger() {
  const body = document.querySelector("body");
  const burger = document.querySelector(".burger");

  let scrollPosition = 0;

  function lockScroll() {
    scrollPosition = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
  }

  function unlockScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    window.scrollTo(0, scrollPosition);
  }

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-open");
    if (burger.classList.contains("is-open")) {
      lockScroll();
      body.classList.add("active");
    } else {
      body.classList.remove("active");
      unlockScroll();
    }
  });
}
