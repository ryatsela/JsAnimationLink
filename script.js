const links = document.querySelectorAll("a");
const highLight = document.createElement("span");
highLight.classList.add("highlight");
document.body.appendChild(highLight);

function displayHighlight() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highLight.style.width = `${coords.width}px`;
  highLight.style.height = `${coords.height}px`;
  highLight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

links.forEach((link) => {
  link.addEventListener("mouseover", displayHighlight);
});
