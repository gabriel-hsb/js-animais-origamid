export default function animalAudios() {
  const audioBtns = document.querySelectorAll('[data-audio]');

  audioBtns.forEach((btn) => {
    btn.addEventListener('click', playAudio)
  });

  function playAudio({target}) {
    target.nextElementSibling.play()
  }
}