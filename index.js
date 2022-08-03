// console.log("ajihaaaan")
const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer ;
prevEl.addEventListener("click", () => {
  x = x + 36;
  clearTimeout(timer);
  viewImage();
});
nextEl.addEventListener("click", () => {
    x = x - 36;
    clearTimeout(timer);
  viewImage();
});
function viewImage() {
  imageContainerEl.style.transform = `perspective(1000px)  rotateY(${x}deg)`;

};
