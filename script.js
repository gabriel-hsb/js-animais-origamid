const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabMenuContent = document.querySelectorAll(".js-tabmenu-content section");

if (tabMenu.length && tabMenuContent.length) {
  function activeSectionTab(index) {
    tabMenuContent.forEach((content) => {
      content.classList.remove("animal-section-active");
    });
    tabMenuContent[index].classList.add("animal-section-active");
  }

  tabMenu.forEach((animalPhoto, index) => {
    animalPhoto.addEventListener("click", handleAnimalPhotoClick);

    function handleAnimalPhotoClick() {
      activeSectionTab(index);
    }
  });
}
