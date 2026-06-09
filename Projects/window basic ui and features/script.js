const clickMenu = document.querySelector(".clickMenu");

const hideMenu = () => {
  clickMenu.style.display = "none";
};

const showMenuAt = (x, y) => {
  const padding = 12;
  clickMenu.style.display = "block";
  clickMenu.style.left = "0px";
  clickMenu.style.top = "0px";

  const menuRect = clickMenu.getBoundingClientRect();
  const canFitRight = x + menuRect.width + padding <= window.innerWidth;
  const canFitLeft = x - menuRect.width - padding >= 0;
  const canFitBelow = y + menuRect.height + padding <= window.innerHeight;
  const canFitAbove = y - menuRect.height - padding >= 0;

  let left = canFitRight ? x : canFitLeft ? x - menuRect.width : Math.max(padding, window.innerWidth - menuRect.width - padding);
  let top = canFitBelow ? y : canFitAbove ? y - menuRect.height : Math.max(padding, window.innerHeight - menuRect.height - padding);

  left = Math.min(Math.max(padding, left), window.innerWidth - menuRect.width - padding);
  top = Math.min(Math.max(padding, top), window.innerHeight - menuRect.height - padding);

  clickMenu.style.left = `${left}px`;
  clickMenu.style.top = `${top}px`;
};

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  showMenuAt(event.clientX, event.clientY);
});

document.addEventListener("click", (event) => {
  if (!clickMenu.contains(event.target)) {
    hideMenu();
  }
});

window.addEventListener("resize", hideMenu);

  