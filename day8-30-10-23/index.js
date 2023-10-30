const bodyEL = document.querySelector("body");

bodyEL.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xpos + "px"; // Corrected to "left"
    spanEl.style.top = ypos + "px"; // Corrected to "top"
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEL.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
