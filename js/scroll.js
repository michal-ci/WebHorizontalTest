const container = document.querySelector(".container");
let scrollLine = document.querySelector(".scroll");

let isHorizontalScroll = window.innerWidth >= 750;
let lastTouchY = 0;
let lastTouchX = 0;

window.addEventListener(
  "resize",
  function () {
    isHorizontalScroll = window.innerWidth >= 750;
  },
  false
);

// Obsługa przewijania
function scrollHandler(e) {
  let deltaY = 0;
  if (e.type === "wheel") {
    deltaY = e.deltaY;
  } else if (e.type === "touchmove") {
    deltaY = lastTouchY - e.touches[0].clientY;
    lastTouchY = e.touches[0].clientY;
    lastTouchX = e.touches[0].clientX;
  }
  e.preventDefault();
  if (isHorizontalScroll) {
    // Przewijanie w poziomie
    container.scrollLeft += deltaY;
    scrollLine.style.width = container.scrollLeft / 10 + "px";
  } else {
    // Przewijanie w pionie
    window.scrollBy(0, deltaY);
  }
}

// Obsługa przewijania za pomocą kółka myszy
container.addEventListener("wheel", scrollHandler);

// Obsługa przewijania za pomocą gestów dotykowych
container.addEventListener(
  "touchstart",
  function (e) {
    // Zapisz pozycję początkową dotknięcia
    lastTouchY = e.touches[0].clientY;
    lastTouchX = e.touches[0].clientX;
  },
  false
);

container.addEventListener("touchmove", scrollHandler);
