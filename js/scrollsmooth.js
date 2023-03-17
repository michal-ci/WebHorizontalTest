// znajdź wszystkie linki na stronie
const links = document.querySelectorAll('a[href^="#"]');

// dla każdego linka, dodaj event listener na kliknięcie
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // zapobiega przeładowaniu strony przy kliknięciu na link

    // znajdź sekcję, do której link prowadzi
    const target = document.querySelector(this.getAttribute("href"));

    // przewiń stronę do sekcji z efektem smooth scroll
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
