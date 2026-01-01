export function initBurger() {
  const body = document.querySelector("body");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-open");
    if (burger.classList.contains("is-open")) {
      body.classList.add("active");
    } else {
      body.classList.remove("active");
    }
  });
}
