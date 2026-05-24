const form =
document.getElementById("contactForm");
const message =
document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  message.textContent = "Thank you for your message!";
  message.style.color = "Purple";
  form.reset();
});
function filterItems(category) {
  let items = document.querySelectorAll('#shop .item');

  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block';
    } else {
      if (item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
}
