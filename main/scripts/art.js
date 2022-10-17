// for (var image of document.querySelectorAll(".images img")) {
//   image.onclick = ()=> {showOverlay(image)};
// }

document.getElementById("overlay").onclick = ()=> {hideOverlay()};

function setOverlayPic(image) {
  const pic = document.createElement("img");
  pic.src = image.src;
  pic.alt = image.alt;

  showOverlay(pic);
}

function setOverlayVid(video) {
  const sou = document.createElement("source");
  sou.src = video.firstElementChild.src;
  sou.type = video.firstElementChild.type;

  const vid = document.createElement("video");
  vid.autoplay = true;
  vid.controls = true;
  vid.loop = true;
  vid.appendChild(sou);

  showOverlay(vid);
}

function showOverlay(elem) {
  var ol = document.getElementById("overlay");
  ol.appendChild(elem);
  ol.style.display = "block";

  document.body.classList.add("scroll-toggle");
}

function hideOverlay() {
  var ol = document.getElementById("overlay");
  ol.style.display = "none";
  ol.removeChild(ol.firstElementChild);

  document.body.classList.remove("scroll-toggle");
}