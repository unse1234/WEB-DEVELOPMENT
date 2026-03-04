
let btn = document.querySelector("button");
let main = document.querySelector("main");
btn.addEventListener("click", function () {
    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "red";
    div.style.position = "absolute";
    div.style.backgroundColor = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
    div.style.left = Math.random() * (window.innerWidth - 100) + "px";
    div.style.top = Math.random() * (window.innerHeight - 100) + "px";
    div.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    main.appendChild(div);
});
