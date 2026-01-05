export function lazyLoad() {
  if ("IntersectionObserver" in window) {
    // observer code
    function lazyLoad() {
      const lazyElements = document.querySelectorAll(".lazy");

      if (!("IntersectionObserver" in window)) {
        lazyElements.forEach(loadElement);
        return;
      }

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            loadElement(entry.target);
            observer.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px 200px 0px",
          threshold: 0,
        }
      );

      lazyElements.forEach((el) => observer.observe(el));
    }

    function loadElement(el) {
      // Якщо це picture
      if (el.tagName === "PICTURE") {
        el.querySelectorAll("[data-srcset]").forEach((source) => {
          source.srcset = source.dataset.srcset;
          source.removeAttribute("data-srcset");
        });

        const img = el.querySelector("img");
        if (img && img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          img.onload = () => el.classList.add("loaded");
        }

        return;
      }

      // Якщо це img
      if (el.tagName === "IMG") {
        if (el.dataset.src) {
          el.src = el.dataset.src;
          el.removeAttribute("data-src");
          el.onload = () => el.classList.add("loaded");
        }
      }
    }

    document.addEventListener("DOMContentLoaded", lazyLoad);
  } else {
    // fallback — одразу завантажуємо всі
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
    });
  }
}
