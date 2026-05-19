document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.dataset.category;

      products.forEach(product => {
        if (category === "all" || product.classList.contains(category)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
});