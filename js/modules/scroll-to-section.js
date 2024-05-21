export default function scrollToSection() {
  const internalAnchorLink = document.querySelectorAll("header a[href^='#']");

  function scrollToSectionById(e) {
    e.preventDefault();
    const sectionTarget = document.querySelector(e.target.hash);
    sectionTarget.scrollIntoView({
      behavior: "smooth",
    });
  }

  internalAnchorLink.forEach((link) => {
    link.addEventListener("click", scrollToSectionById);
  });
}