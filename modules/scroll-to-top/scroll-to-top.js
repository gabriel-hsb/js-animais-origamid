export default function scrollToTop() {
  const arrowUp = document.querySelector("footer span");

  arrowUp.addEventListener("click", () => window.scrollTo(0, 0));
}
