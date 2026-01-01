export function initRandomColor() {
  const carts = document.querySelectorAll(".our__item");

  function generateRGB(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandomColor() {
    return rgbToHex(
      generateRGB(127, 255),
      generateRGB(127, 255),
      generateRGB(127, 255)
    );
  }

  function rgbToHex(r, g, b) {
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function toHex(value) {
    return value.toString(16).padStart(2, "0");
  }

  for (let i = 0; i < carts.length; i++) {
    carts[i].style.backgroundColor = getRandomColor();
  }
}
