// text type

var codes = document.getElementById("commentary");
document.body.onload = () => {
  say('Hey there,', ' thanks for stopping by!');
}

var typed = document.getElementById("typed");
var typingInterval = null;
var typing = false;

function say(part1, part2 = "") {
  if (typing) return;
  
  if (typed.textContent != "") {
    clearInterval(typingInterval);
    typing = true;
    delay(500, () => {
      deleteText(() => {
        typeText(part1, part2);
      });
    })
  } else {
    typing = true;
    typeText(part1, part2);
  }
}

function typeText(part1, part2) {
  delay(500, () => {
    typePart(part1, () => {
      delay(500, () => {
        typePart(part2, () => {
          typing = false;
        });
      });
    });
  });
}

function delay(ms, doAfter) {
  timeout = setTimeout(doAfter, ms);
}

function typePart(part, doAfter) {
  typingInterval = setInterval(() => {
    if (part == "") {
      clearInterval(typingInterval);
      doAfter();
    } else {
      typed.textContent = typed.textContent + part.charAt(0);
      part = part.substring(1);
    }
  }, 70);
}

function deleteText(doAfter) {
  deletingInterval = setInterval(() => {
    if (typed.textContent == "") {
      clearInterval(deletingInterval);
      doAfter();
    } else {
      typed.textContent = typed.textContent.substring(0, typed.textContent.length-1);
    }
  }, 20);
}

// game animation

let currentMood = "happy";
let currentDirection = "none";
let gif = document.getElementById("gif").firstElementChild;

document.getElementById("up").onmouseup = () => {changeDirection("up")};
document.getElementById("right").onmouseup = () => {changeDirection("right")};
document.getElementById("down").onmouseup = () => {changeDirection("down")};
document.getElementById("left").onmouseup = () => {changeDirection("left")};

document.getElementById("happy").onmouseup = () => {changeMood("happy")};
document.getElementById("sad").onmouseup = () => {changeMood("sad")};

function changeDefault() {
  currentDirection = "none";
  gif.src = "main/sprites/still_" + currentMood + ".png";
}

function changeDirection(direction) {
  if (direction == currentDirection) {
    changeDefault();
  } else {
    currentDirection = direction
    change();
  }
}

function changeMood(mood) {
  if (typing) return;

  checkNarrative(mood); 
  currentMood = mood;

  if (currentDirection == "none") {
    changeDefault();
  } else {
    change();
  }
}

function change() {
  if (currentDirection == "up") {
    gif.src = "main/sprites/walking_up.gif";
  } else {
    gif.src = "main/sprites/walking_" + currentDirection + "_" + currentMood + ".gif";
  }
}

let happyToSadNarrative = 0;
let sadToHappyNarrative = 0;
function checkNarrative(mood) {
  if (currentMood == "happy" && mood == "sad") {
    if (happyToSadNarrative == 0) {
      say("Aw,", " why'd you make him sad?");
    } else if (happyToSadNarrative == 1) {
      say("Doesn't mean you have to make him sad, though.", " Again.");
    } else if (happyToSadNarrative == 2) {
      say("There are other buttons too, you know?");
    } else if (happyToSadNarrative == 3) {
      say("At least those won't make him sad.");
    } else if (happyToSadNarrative == 4) {
      say("...", "the other top.");
    } else if (happyToSadNarrative == 5) {
      say("Or not.");
    } else if (happyToSadNarrative == 6) {
      say("But either way...");
    }
    happyToSadNarrative++;

  } else if (currentMood == "sad" && mood == "happy") {
    if (sadToHappyNarrative == 0) {
      say("Because there's a button?", " Fair enough.");
    } else if (sadToHappyNarrative == 1) {
      say("Ahhh,", " much better.")
    } else if (sadToHappyNarrative == 2) {
      say("Colorful ones in a nice bar or stack,", " it depends on your screen size.");
    } else if (sadToHappyNarrative == 3) {
      say("They're right there at top!")
    } else if (sadToHappyNarrative == 4) {
      say("Check them out!")
    } else if (sadToHappyNarrative == 5) {
      say("Completely up to you.")
    } else if (sadToHappyNarrative == 6) {
      say("Thanks again for stopping by!")
    }
    sadToHappyNarrative++;
  }
}

