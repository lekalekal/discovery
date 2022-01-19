var header = document.getElementsByClassName("header")[0];
var burgerMenu = document.getElementsByClassName("burger-menu")[0];
var showHeader = false;

burgerMenu.onclick = function (event) {
  if (showHeader == false) {
    header.setAttribute("style", "transform: translateX(0%);")
    showHeader = true;
  }
  else {
    header.setAttribute("style", "transform: translateX(-100%);");
    showHeader = false;
  }
}