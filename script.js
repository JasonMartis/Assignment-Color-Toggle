// HAMBURGER + SIDEBAR

const btnMenuOpen = document.querySelector(".button-menu");
const html = document.querySelector("html");
const menuContainer = document.querySelector(".sidebar");

function menuOpenClose() {
  let isOpen = false;

  if (btnMenuOpen) {
    btnMenuOpen.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      if (isOpen == false) {
        menuContainer.classList.add("active");
        btnMenuOpen.classList.add("active");
        html.classList.add("overflow-scroll");
        isOpen = true;
      } else {
        menuContainer.classList.remove("active");
        btnMenuOpen.classList.remove("active");
        html.classList.remove("overflow-scroll");
        isOpen = false;
      }
    });
  }
}

menuOpenClose();

// CLOSE ON CLICK
function menuClose() {
  menuContainer.classList.remove("active");
  btnMenuOpen.classList.remove("active");
  html.classList.remove("overflow-scroll");
}

// CLOSE ON CLICK WHEN PICKING COLOR
function closeAndOpen() {
  menuClose();
  menuOpenClose();
}

// RADIO BUTTON - BONUS
let changeHandler = (function initChangeHandler() {
  let previousCheckedRadio = null;

  let result = function (event) {
    let currentCheckedRadio = event.target;
    let name = currentCheckedRadio.name;

    if (name !== "myRadios") return;

    previousCheckedRadio = currentCheckedRadio;
  };

  return result;
})();

document.addEventListener("change", changeHandler, false);

// HOVER - I DIDN'T DO THIS

// KEYBOARDEVENT - BONUS
document.onkeyup = function () {
  let keyCode = window.event ? window.event.keyCode : event.which;
  changeColor(keyCode);
};

function changeColor(keyCode) {
  if (keyCode == 49) {
    bodyBG.className = "bgHome";
    nameColor.innerText = "white";
  } else if (keyCode == 50) {
    bodyBG.className = "bgYellow";
    nameColor.innerText = "yellow";
  } else if (keyCode == 51) {
    bodyBG.className = "bgOrange";
    nameColor.innerText = "orange";
  } else if (keyCode == 52) {
    bodyBG.className = "bgRed";
    nameColor.innerText = "red";
  } else if (keyCode == 53) {
    bodyBG.className = "bgPink";
    nameColor.innerText = "pink";
  } else if (keyCode == 54) {
    bodyBG.className = "bgPurple";
    nameColor.innerText = "purple";
  } else if (keyCode == 55) {
    bodyBG.className = "bgBlue";
    nameColor.innerText = "blue";
  } else if (keyCode == 56) {
    bodyBG.className = "bgGreen";
    nameColor.innerText = "green";
  }
}

// MENU + CHANGE COLOR

let bodyBG = document.getElementById("bgColor");
const home = document.getElementById("home");
const yellow = document.getElementById("yellow");
const orange = document.getElementById("orange");
const red = document.getElementById("red");
const pink = document.getElementById("pink");
const purple = document.getElementById("purple");
const blue = document.getElementById("blue");
const green = document.getElementById("green");

let nameColor = document.getElementById("nameColor");

home.addEventListener("click", function () {
  bodyBG.className = "bgHome";
  nameColor.innerText = "white";
  closeAndOpen();
});

yellow.addEventListener("click", function () {
  bodyBG.className = "bgYellow";
  nameColor.innerText = "yellow";
  closeAndOpen();
});

orange.addEventListener("click", function () {
  bodyBG.className = "bgOrange";
  nameColor.innerText = "orange";
  closeAndOpen();
});

red.addEventListener("click", function () {
  bodyBG.className = "bgRed";
  nameColor.innerText = "red";
  closeAndOpen();
});

pink.addEventListener("click", function () {
  bodyBG.className = "bgPink";
  nameColor.innerText = "pink";
  closeAndOpen();
});

purple.addEventListener("click", function () {
  bodyBG.className = "bgPurple";
  nameColor.innerText = "purple";
  closeAndOpen();
});

blue.addEventListener("click", function () {
  bodyBG.className = "bgBlue";
  nameColor.innerText = "blue";
  closeAndOpen();
});

green.addEventListener("click", function () {
  bodyBG.className = "bgGreen";
  nameColor.innerText = "green";
  closeAndOpen();
});
