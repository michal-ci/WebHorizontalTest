function openModal(img) {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = img.src;
}

console.log("test lightbox");
// funkcja zamykająca okno modalne
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
