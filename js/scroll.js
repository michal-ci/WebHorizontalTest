// const container = document.querySelector(".container");
// let scrollLine = document.querySelector(".scroll");

// container.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   container.scrollLeft += e.deltaY;
//   scrollLine.style.width = container.scrollLeft / 10 + "px";
// });

// const container = document.querySelector(".container");
// let scrollLine = document.querySelector(".scroll");

// container.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   if (window.innerWidth < 750) {
//     // Przewijanie w pionie, jeżeli szerokość okna jest mniejsza niż 750px
//     container.scrollTop += e.deltaY;
//   } else {
//     // Przewijanie w poziomie, jeżeli szerokość okna jest większa lub równa 750px
//     container.scrollLeft += e.deltaY;
//     scrollLine.style.width = container.scrollLeft / 10 + "px";
//   }
// });

const container = document.querySelector(".container");
let scrollLine = document.querySelector(".scroll");

let startTouchPosition = null;

// Obsługa przewijania za pomocą kółka myszy
container.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (window.innerWidth < 750) {
    // Przewijanie w pionie, jeżeli szerokość okna jest mniejsza niż 750px
    container.scrollTop += e.deltaY;
  } else {
    // Przewijanie w poziomie, jeżeli szerokość okna jest większa lub równa 750px
    container.scrollLeft += e.deltaY;
    scrollLine.style.width = container.scrollLeft / 10 + "px";
  }
});

// Obsługa przewijania za pomocą gestów dotykowych
container.addEventListener(
  "touchstart",
  function (e) {
    // Zapisz pozycję początkową dotknięcia
    startTouchPosition = e.touches[0].pageY;
  },
  false
);

container.addEventListener(
  "touchmove",
  function (e) {
    // Zapobiegaj domyślnemu przewijaniu przeglądarki
    e.preventDefault();

    let touchPosition = e.touches[0].pageY;
    let scrollAmount = startTouchPosition - touchPosition;

    if (window.innerWidth < 750) {
      // Przewijanie w pionie, jeżeli szerokość okna jest mniejsza niż 750px
      container.scrollTop += scrollAmount;
    } else {
      // Przewijanie w poziomie, jeżeli szerokość okna jest większa lub równa 750px
      container.scrollLeft += scrollAmount;
      scrollLine.style.width = container.scrollLeft / 10 + "px";
    }

    // Aktualizuj początkową pozycję dotknięcia dla kolejnego przewinięcia
    startTouchPosition = touchPosition;
  },
  false
);
console.log("test scryptu ");
