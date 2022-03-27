function change(direction) {
  var pad = document.getElementById("pad");
  pad.src = "main/sprites/pad_" + direction + ".png";
  var gif = document.getElementById("gif");
  gif.src = "main/sprites/walking_" + direction + ".gif";
  return false;
}

function changeDefault() {
  var pad = document.getElementById("pad");
  pad.src = "main/sprites/pad.png";
  var gif = document.getElementById("gif");
  gif.src = "main/sprites/still.png";
  return false;
}

// function gridHover() {
//   var gridItems = document.getElementsByClassName("grid-item");
//   for (let i = 0; i < gridItems.length; i++) {
//     console.log("gsg");
//     gridItems[i].addEventListener("mouseover", function() {
//       var grid = document.getElementById("grid");

//       if (i%2 == 0) {
//         grid.style.gridTemplateColumns = "60% 40%";
//         grid.style.gridTemplateRows = "60vh 40vh";
//       } else {
//         grid.style.gridTemplateColumns = "40% 60%";
//         grid.style.gridTemplateRows = "40vh 60vh";
//       }
//     });
//   }
// }

function expand(c1, c2, r1, r2) {
  var grid = document.getElementById("grid");
  grid.style.gridTemplateColumns = c1 + "% " + c2 + "%";
  grid.style.gridTemplateRows = r1 + "vh " + r2 + "vh";
}

function shrink() {
  var grid = document.getElementById("grid");
  grid.style.gridTemplateColumns = "50% 50%";
  grid.style.gridTemplateRows = "50vh 50vh";
}