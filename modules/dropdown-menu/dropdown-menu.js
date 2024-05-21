import outsideClick from "../../functions/outside-click.js";

export default function dropdownMenu() {
  const dropdownMenu = document.querySelector("[data-dropdown]");

  const userEvents = ["touchstart", "click"];

  userEvents.forEach((userEvent) => {
    dropdownMenu.addEventListener(userEvent, handleClick);
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("active");
    outsideClick(this, userEvents, () => {
      this.classList.remove("active");
    });
  }
}
