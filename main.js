"use strict";

//navbar가 상위로 올라가면 투명하게 처리
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Navbar메뉴를 탭할 때, 스크롤링 처리
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

//(Home안에 있는)'연락하기'버튼을 클릭하면 하단의 Contact 섹션으로 내려갈 수 있게 하기
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//브라우저가 아래로 스크롤되면서 점점 투명하게 되는 효과주기
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//스크롤링되면 화살표아이콘이 보이도록 하기
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//화살표아이콘 클릭하면 홈으로 올라가게 하기
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//함수 추가(selector만 추가하면 이동할 수있는 함수)
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

//스크롤링되면 화살표아이콘이 보이도록 하기
