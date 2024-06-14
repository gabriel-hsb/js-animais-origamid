export default function scrollToTop() {
  const arrowUp = document.querySelector(".copy div");

  arrowUp.addEventListener("click", () => window.scrollTo(0, 0));
}
