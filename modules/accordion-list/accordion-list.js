export default function faqAccordions() {
  const accordionItems = document.querySelectorAll(".faq dt");

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
