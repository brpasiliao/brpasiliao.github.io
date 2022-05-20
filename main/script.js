function change(direction) {
  var pad = document.getElementById("pad");
  pad.src = "main/sprites/pad_" + direction + ".png";
  var gif = document.getElementById("gif").firstElementChild;
  gif.src = "main/sprites/walking_" + direction + ".gif";
  return false;
}

function changeDefault() {
  var pad = document.getElementById("pad");
  pad.src = "main/sprites/pad.png";
  var gif = document.getElementById("gif").firstElementChild;
  gif.src = "main/sprites/still.png";
  return false;
}

function expandRow(r1, r2) {
  var row1 = document.getElementById("row" + r1);
  var row2 = document.getElementById("row" + r2);
  row1.style.height = "60vh";
  row2.style.height = "40vh";
}

function expandCol(c1, c2) {
  var col1 = document.getElementsByClassName("col" + c1);
  var col2 = document.getElementsByClassName("col" + c2);
  for (var i = 0; i < col1.length; i++) {col1[i].style.width = "60%";}
  for (var i = 0; i < col2.length; i++) {col2[i].style.width = "40%";}
}

function shrink() {
  var row1 = document.getElementById("row1");
  var row2 = document.getElementById("row2");
  var col1 = document.getElementsByClassName("col1");
  var col2 = document.getElementsByClassName("col2");
  row1.style.height = "50vh";
  row2.style.height = "50vh";
  for (var i = 0; i < col1.length; i++) {col1[i].style.width = "50%";}
  for (var i = 0; i < col2.length; i++) {col2[i].style.width = "50%";}
}

function adjustContent() {
  var codes = document.getElementById("code").children;
  var software = document.getElementById("software");

  if (!isOverflown(software)) 
    for (var i = 0; i < codes.length; i++)
      codes[i].style.display = "block";

  var l = codes.length - 1;
  while (l >= 0 && isOverflown(software)) {
    codes[l].style.display = "none";
    l--;
  }
}

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}


// needs fix
function addTab(element) {
  var wholeText = element.innerHTML;
  var splitText = wholeText.split("\r\n");
  var newHtml = null;
  for (var i = 0; i < splitText.length; i++) {
    newHtml += "\t" + splitText[i];
  }
  element.innerHTML = newHtml;
}