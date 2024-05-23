export default function animalNumbers() {
  function animateNumbers() {
    const numbers = document.querySelectorAll("[data-number]");

    numbers.forEach((number) => {
      const numberText = Number(number.innerText);
      let i = 0;

      const relativeTimer = Math.floor(numberText / 100);

      const timer = setInterval(() => {
        i += relativeTimer;
        number.innerText = i;
        if (i > numberText) {
          number.innerText = numberText;

          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("section-animate-entrance")) {
      observer.disconnect();
      animateNumbers();
    }
  }

  const observerTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
