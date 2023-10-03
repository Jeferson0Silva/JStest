const banner = document.querySelector(".banner");
const btns = document.querySelectorAll(".banner__list .banner__mimg");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.getAttribute("src");
    banner.style.backgroundImage = `url(${img})`;
  });
});

const aside = document.querySelectorAll('banner__title banner__movie');

