function animalsDescription() {
  const animalsPhotos = document.querySelectorAll(".js-tabmenu li");
  const animalsDescriptions = document.querySelectorAll(
    ".js-tabmenu-content section"
  );

  if (animalsPhotos.length && animalsDescriptions.length) {
    function activeSectionTab(index) {
      animalsDescriptions.forEach((description) => {
        description.classList.remove("animal-section-active");
      });

      animalsDescriptions[index].classList.add("animal-section-active");

      animalsPhotos.forEach((animalPhoto) => {
        animalPhoto.classList.remove("animal-photo-active");
      });
      animalsPhotos[index].classList.add("animal-photo-active");
      // TODO: zoom image (modal-like) when active (description is showing)
    }

    animalsPhotos.forEach((animalPhoto, index) => {
      animalPhoto.addEventListener("click", handleAnimalPhotoClick);

      function handleAnimalPhotoClick() {
        activeSectionTab(index);
      }
    });
  }
}
animalsDescription();

function faqAccordions() {
  const accordionItems = document.querySelectorAll(".js-accordion dt");

  if (accordionItems.length) {
    function handleAccordionItem() {
      this.classList.toggle("accordion-definition-active");
      this.nextElementSibling.classList.toggle("accordion-description-active");
    }

    accordionItems.forEach((accordionItem) => {
      accordionItem.addEventListener("click", handleAccordionItem);
    });
  }
}

faqAccordions();

function scrollToSection() {
  const internalAnchorLink = document.querySelectorAll(".js-menu a[href^='#']");

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
scrollToSection();
