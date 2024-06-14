export default function animalsDescription() {
  const animalsPhotos = document.querySelectorAll(".animals-list li");
  const animalsDescriptions = document.querySelectorAll("[data-tab='content'] section");

  const modalContainer = document.querySelector("[data-modal-photo='container']");
  const modalImg = modalContainer.querySelector('[data-modal-photo="img"]');

  if (animalsPhotos.length && animalsDescriptions.length && modalContainer) {
    modalContainer.addEventListener("click", clickOutsideCloseModal);

    function clickOutsideCloseModal(e) {
      if (e.target === this) toggleModal();
      document
        .querySelector(".animal-photo-active")
        .removeEventListener("click", toggleModal);
    }

    function toggleModal(e) {
      modalContainer.classList.toggle("active");

      if (modalContainer.classList.contains("active")) {
        modalImg.src = e.target.src;
      }
    }

    function activeSectionTab(index) {
      // active description
      animalsDescriptions.forEach((description) => {
        description.classList.remove("animal-section-active");
      });
      animalsDescriptions[index].classList.add("animal-section-active");

      // zoom image
      animalsPhotos.forEach((animalPhoto) => {
        animalPhoto.classList.remove("animal-photo-active");
      });
      animalsPhotos[index].classList.add("animal-photo-active");

      document
        .querySelector(".animal-photo-active")
        .addEventListener("click", toggleModal);
    }

    animalsPhotos.forEach((animalPhoto, index) => {
      animalPhoto.addEventListener("click", () => activeSectionTab(index));
    });
  }
}
