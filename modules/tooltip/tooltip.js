export default function tooltip() {
  if (window.matchMedia("(width >= 500px)").matches) {

    const tooltips = document.querySelectorAll("[data-tooltip]");

    tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", handleMouseHover);
    });

    function handleMouseHover(e) {
      const tooltipContainer = createTooltipContainer(this);

      this.addEventListener("mousemove", tooltipMouseMove);
      tooltipMouseMove.tooltipContainer = tooltipContainer;

      this.addEventListener("mouseleave", handleMouseLeave);
      handleMouseLeave.element = this;
      handleMouseLeave.tooltipContainer = tooltipContainer;
    }

    const handleMouseLeave = {
      handleEvent() {
        this.tooltipContainer.remove();
        this.element.removeEventListener("mouseleave", handleMouseLeave);
        this.element.removeEventListener("mousemove", tooltipMouseMove);
      },
    };

    const tooltipMouseMove = {
      handleEvent(e) {
        this.tooltipContainer.style.top = e.pageY + 20 + "px";
        this.tooltipContainer.style.left = e.pageX + 20 + "px";
      },
    };

    function createTooltipContainer(element) {
      const tooltipContainer = document.createElement("div");
      const tooltipText = element.getAttribute("aria-label");

      tooltipContainer.classList.add("tooltip-container");
      tooltipContainer.innerText = tooltipText;

      document.body.appendChild(tooltipContainer);

      return tooltipContainer;
    }
  }
}
