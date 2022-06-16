document.body.onmouseout = ()=> {shrink()};
document.body.ontransitionend = ()=> {adjustContent()};

document.getElementById("row1").onmouseover = ()=> {expandRow(1, 2)};
document.getElementById("row2").onmouseover = ()=> {expandRow(2, 1)};

document.getElementById("name").onmouseover = ()=> {expandCol(1, 2)};
document.getElementById("software").onmouseover = ()=> {expandCol(1, 2); showConsole()};
document.getElementById("software").onmouseout = ()=> {hideConsole()};
document.getElementById("game").onmouseover = ()=> {expandCol(2, 1)};
document.getElementById("art").onmouseover = ()=> {expandCol(2, 1)};

var sensors = document.getElementsByClassName("sensor");
for (var i = 0; i < sensors.length; i++) {sensors[i].onmouseout = ()=> {changeDefault()};}
document.getElementById("up").onmouseover = ()=> {change("up")};
document.getElementById("right").onmouseover = ()=> {change("right")};
document.getElementById("down").onmouseover = ()=> {change("down")};
document.getElementById("left").onmouseover = ()=> {change("left")};

var codes = document.getElementById("code").children;
codes[0].onmouseover = ()=> {typeAnimation('Java', 'Hello')};
codes[1].onmouseover = ()=> {typeAnimation('C#', 'Hey')};
codes[2].onmouseover = ()=> {typeAnimation('JavaScript', 'Hi')};



// shrinks boxes back to equal sizes
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

// caps software engineering text overflow when changing box sizes
function adjustContent() {
  var codes = document.getElementById("code").children;
  var software = document.getElementById("software");

  if (!isOverflown(software)) 
    for (var i = 0; i < codes.length-1; i++)
      codes[i].style.display = "block";

  var l = codes.length - 2;
  while (l >= 0 && isOverflown(software)) {
    codes[l].style.display = "none";
    l--;
  }

  function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }
}

// transition to make box row bigger
function expandRow(r1, r2) {
  var row1 = document.getElementById("row" + r1);
  var row2 = document.getElementById("row" + r2);
  row1.style.height = "60vh";
  row2.style.height = "40vh";
}

// transition to make box column bigger
function expandCol(c1, c2) {
  var col1 = document.getElementsByClassName("col" + c1);
  var col2 = document.getElementsByClassName("col" + c2);
  for (var i = 0; i < col1.length; i++) {col1[i].style.width = "60%";}
  for (var i = 0; i < col2.length; i++) {col2[i].style.width = "40%";}
}

// changes game dev gif to a still
function changeDefault() {
  var pad = document.getElementById("pad").firstElementChild;
  pad.src = "main/sprites/pad.png";
  var gif = document.getElementById("gif").firstElementChild;
  gif.src = "main/sprites/still.png";
  return false;
}

// changes game dev gif to respective direction
function change(direction) {
  var pad = document.getElementById("pad").firstElementChild;
  pad.src = "main/sprites/pad_" + direction + ".png";
  var gif = document.getElementById("gif").firstElementChild;
  gif.src = "main/sprites/walking_" + direction + ".gif";
  return false;
}

function showConsole() {
  document.getElementById("console").style.display = "block";
}

function hideConsole() {
  document.getElementById("console").style.display = "none";
}

let interval = null;
let prevLang = null;
function typeAnimation(lang, greeting) {
  var typed = document.getElementById("typed");
  var text1 = lang + " says:"
  var text2 = " " + greeting + " world!";

  if (lang != prevLang) {
    clearInterval(interval);

    prevLang = lang;
    typed.textContent = typed.textContent.substring(0, typed.textContent.length-1);
    interval = setTimeout(delay1, 500);
  }

  function delay1() {
    interval = setInterval(deletion, 20);
  }

  function deletion() {
    if (typed.textContent == "") {
      clearInterval(interval);
      interval = setTimeout(delay2, 500);
    } else {
      typed.textContent = typed.textContent.substring(0, typed.textContent.length-1);
    }
  }

  function delay2() {
    interval = setInterval(typing1, 70);
  }

  function typing1() {
    if (text1 == "") {
      clearInterval(interval);
      interval = setTimeout(delay3, 500);
    } else {
      typed.textContent = typed.textContent + text1.charAt(0);
      text1 = text1.substring(1);
    }
  }

  function delay3() {
    interval = setInterval(typing2, 70);
  }

  function typing2() {
    if (text2 == "") {
      clearInterval(interval);
    } else {
      typed.textContent = typed.textContent + text2.charAt(0);
      text2 = text2.substring(1);
    }
  }
}

function erase(drawing) {
  if (drawing.style.opacity == 0) drawing.style.opacity = 1;
  if (drawing.style.opacity > 0.1) 
    drawing.style.opacity -= 0.03;
}

function draw(drawing) {
  if (drawing.style.opacity < 1) {
    let artInterval = null;
    artInterval = setTimeout(delay, 500);

    function delay() {
      artInterval = setInterval(opaque, 100);
    }

    function opaque() {
      if (drawing.style.opacity >= 1 || drawing.matches(':hover')) 
        clearInterval(artInterval);
      else drawing.style.opacity = parseFloat(drawing.style.opacity) + 0.03;
    }
  }
}