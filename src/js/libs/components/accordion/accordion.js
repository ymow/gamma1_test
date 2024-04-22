export function initFaqAccordion() {
  return {
    setup() {
      const items = document.querySelectorAll(".accordion button");

      if (items.length) {
        function toggleAccordion() {
          const itemToggle = this.getAttribute("aria-expanded");

          for (let i = 0; i < items.length; i++) {
            items[i].setAttribute("aria-expanded", "false");
          }

          if (itemToggle == "false") {
            this.setAttribute("aria-expanded", "true");
          }
        }

        items.forEach((item) =>
          item.addEventListener("click", toggleAccordion)
        );
      }
    },
  };
}
