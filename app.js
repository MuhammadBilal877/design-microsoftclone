const imgs = document.querySelector(".content img");
const left = document.querySelector(".button-div a .left-icon");
const right = document.querySelector(".button-div a .right-icon");

function changeSlider() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
changeSlider();
left.addEventListener("click", () => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlider();
});
