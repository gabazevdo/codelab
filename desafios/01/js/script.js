// Fill heart icon on click
const iconHeart = document.querySelectorAll(".icon-heart");

iconHeart.forEach(icon => {
  icon.onclick = () => {
    icon.classList.toggle("filled");
  };
});
