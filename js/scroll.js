const container = document.querySelector(".container");
let scrollLine = document.querySelector(".scroll");

container.addEventListener("wheel", (e) => {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
  scrollLine.style.width = container.scrollLeft / 10 + "px";
});

console.log("test scryptu ");
