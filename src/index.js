import "./styles.css";

let roadmapButton = document.getElementById("roadmap-icon");
let buildButton = document.getElementById("build-icon");
let termButton = document.getElementById("term-icon");
let title = document.getElementById("title");

let popup = document.getElementById("popup");

popup.style.visibility = "hidden";

roadmapButton.addEventListener("click", showPopup);
buildButton.addEventListener("click", showPopup);
termButton.addEventListener("click", showPopup);

popup.addEventListener("click", hidePopup);
title.addEventListener("click", hidePopup);

function showPopup() {
  popup.style.visibility = "visible";
}

function hidePopup() {
  popup.style.visibility = "hidden";
}
