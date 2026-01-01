export function initMixitup() {
  if (!document.querySelector(".categories")) return;

  const mixer = mixitup(".categories", {
    load: {
      filter: ".water-resistant",
    },
  });
}
