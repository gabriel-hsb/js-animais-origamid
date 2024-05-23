import outsideClick from "../../functions/outside-click.js";

export default function burguerMenu() {
  const buttonMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  const userClickEvents = ["click"];

  if (buttonMenu) {
    userClickEvents.forEach((userEvent) => {
      buttonMenu.addEventListener(userEvent, openMenu);
    });

    function openMenu() {
      menuList.classList.add("active");
      buttonMenu.classList.add("active");

      outsideClick(menuList, userClickEvents, () => {
        menuList.classList.remove("active");
        buttonMenu.classList.remove("active");
      });
    }
  }
}
