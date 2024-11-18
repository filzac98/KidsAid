document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.getElementById("read-more-btn");
  const dropdownText = document.getElementById("dropdown-text");

  readMoreBtn.addEventListener("click", () => {
    const isExpanded = dropdownText.classList.contains("show");
    dropdownText.classList.toggle("show");
    readMoreBtn.textContent = isExpanded ? "Læs Mere" : "Læs Mindre";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".carousel-btn");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const dropdown = button
        .closest(".item")
        .querySelector(".dropdown-content");
      const isExpanded = dropdown.classList.contains("show");
      dropdown.classList.toggle("show");
      button.textContent = isExpanded ? "LÆS MERE" : "LÆS MINDRE";
    });
  });
});
