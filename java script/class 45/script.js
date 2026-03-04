let img = document.querySelector(".img-icons img");
let heart = document.querySelector(".img-icons i");

img.addEventListener("dblclick", function () {

    heart.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
   setTimeout(() => {
    heart.style.animation = "likeUp 1s ease-in forwards";
   },700);
    setTimeout(() => {
  heart.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
   },1000);


});