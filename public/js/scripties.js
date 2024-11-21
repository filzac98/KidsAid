document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.getElementById("read-more-btn");
  const dropdownText = document.getElementById("dropdown-text");

  readMoreBtn.addEventListener("click", () => {
    const isExpanded = dropdownText.classList.contains("show");
    dropdownText.classList.toggle("show");
    readMoreBtn.textContent = isExpanded ? "Læs Mere" : "Læs Mindre";
  });
});
