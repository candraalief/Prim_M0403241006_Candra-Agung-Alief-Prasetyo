const carousel = document.querySelector(".carousel");
const firstImg = carousel.querySelector("img");
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false;
let prevPageX, prevScrollLeft;
const getImageWidth = () => {
  return firstImg.getBoundingClientRect().width + 14; // 14px dari CSS
};
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft >= scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft +=
      icon.id === "left" ? -getImageWidth() : getImageWidth();
    showHideIcons();
  });
});

const dragstart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  const positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragstart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", showHideIcons);
window.addEventListener("resize", () => {
  getImageWidth() = firstImg.clientWidth + 14;
  scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  showHideIcons();
});

showHideIcons();
