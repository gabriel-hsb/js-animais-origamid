export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const dataOutside = "data-outside";

  if (!element.hasAttribute(dataOutside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(dataOutside, "");
  }

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(dataOutside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      html.removeEventListener("click", handleOutsideClick);
      callback();
    }
  }
}
