export default function animateSectionEntrance() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowHalfHeight = window.innerHeight * 0.5;
    const classNameSection = "section-animate-entrance";
    
    sections[0].classList.add(classNameSection);
    function animateSectionScroll() {
      sections.forEach((section) => {
        const sectionToTop = section.getBoundingClientRect().top;
        const sectionIsVisible = sectionToTop - windowHalfHeight < 0;

        if (sectionIsVisible) {
          section.classList.add(classNameSection);
        } else if (section.classList.contains(classNameSection)) {
          section.classList.remove(classNameSection);
        }
      });
    }

    window.addEventListener("scroll", animateSectionScroll);
  }
}
