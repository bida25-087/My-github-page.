
const filterButtons = document.querySelectorAll(".filter-btn");


const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    
    
    filterButtons.forEach(btn => btn.classList.remove("active"));
    
    
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    products.forEach(product => {
      if (category === "all") {
        product.style.display = "block";
      } else if (product.classList.contains(category)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
``
 const cartButtons = document.querySelectorAll(".shop-btn");

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const productName = button.parentElement.querySelector("h3").innerText;
    alert(productName + " added to cart 🛒");
  });
});
``     