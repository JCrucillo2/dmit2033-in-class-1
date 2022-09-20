const moreBtn = document.querySelector(".nav-toggle");

moreBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const navControl = document.querySelector(".inner-nav");

  navControl.classList.toggle("show");
});
