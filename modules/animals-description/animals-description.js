export default function animalsDescription() {
  const animalsPhotos = document.querySelectorAll(".animals-list li");
  const animalsDescriptions = document.querySelectorAll(
    "[data-tab='content'] section"
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