let page = document.getElementById("pageName").getAttribute("value");
let header = document.getElementsByClassName("contentHeader");
let menu = document.getElementById("burgerModal");
let burger = document.getElementsByClassName("burgerContainer");
let closeModal = document.getElementById("closeModal");

burger[0].addEventListener("click", displayMenu);
closeModal.addEventListener("click", exitModal);


if (page == "index") {
  var headerText = document.createTextNode("What is Angular?");
}

header[0].appendChild(headerText);

function displayMenu() {
  menu.style.display = "block";
}

function exitModal() {
  menu.style.display = "none";
}