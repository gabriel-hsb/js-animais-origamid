export default function animateSectionEntrance() {
  const sections = document.querySelectorAll("[data-tab='content']");
  const windowHalfHeight = window.innerHeight * 0.5;

  if (sections.length) {
    sections[0].classList.add("section-animate-entrance");
    function animateSectionScroll() {
      sections.forEach((section) => {
        const sectionToTop = section.getBoundingClientRect().top;
        const sectionIsVisible = sectionToTop - windowHalfHeight < 0;

        if (sectionIsVisible) {
          section.classList.add("section-animate-entrance");
        }
      });
    }

    window.addEventListener("scroll", animateSectionScroll);
  }
}