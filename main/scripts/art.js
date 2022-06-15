// for (var image of document.querySelectorAll(".images img")) {
//   image.onclick = ()=> {showOverlay(image)};
// }

document.getElementById("overlay").onclick = ()=> {hideOverlay()};

function showOverlay(image) {
  const pic = document.createElement("img");
  pic.src = image.src;
  pic.alt = image.alt;

  var ol = document.getElementById("overlay");
  ol.appendChild(pic);
  ol.style.display = "block";

  document.body.classList.add("scroll-toggle");
}

function hideOverlay() {
  var ol = document.getElementById("overlay");
  ol.style.display = "none";
  ol.removeChild(ol.firstElementChild);

  document.body.classList.remove("scroll-toggle");
}