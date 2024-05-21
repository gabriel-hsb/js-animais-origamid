export default function modal() {
  const modalContainer = document.querySelector("[data-modal='container']");
  const openModalButton = document.querySelector("[data-modal='open']");
  const closeModalButton = document.querySelector("[data-modal='close']");
  const submitButton = modalContainer.querySelector("button[type='submit']");

  if (modalContainer && openModalButton && closeModalButton && submitButton) {
    closeModalButton.addEventListener("click", toggleModal);
    openModalButton.addEventListener("click", toggleModal);
    function toggleModal() {
      modalContainer.classList.toggle("active");
    }

    modalContainer.addEventListener("click", clickOutsideCloseModal);
    function clickOutsideCloseModal(e) {
      if (e.target === this) toggleModal();
    }

    submitButton.addEventListener("click", handleSubmit);
    function handleSubmit(e) {
      e.preventDefault();
    }
  }
}
