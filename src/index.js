import "./styles.css";

let roadmapButton = document.getElementById("roadmap-icon");
let buildButton = document.getElementById("build-icon");
let termButton = document.getElementById("term-icon");

let popupBuild = document.getElementById("popup-build-guide");
let popupTerm = document.getElementById("popup-term");
let popupGame = document.getElementById("popup-game");

popupBuild.style.visibility = "hidden";
popupTerm.style.visibility = "hidden";
popupGame.style.visibility = "hidden";

roadmapButton.addEventListener("click", showPopupGame);
buildButton.addEventListener("click", showPopupBuild);
termButton.addEventListener("click", showPopupTerm);

popupGame.addEventListener("click", hidePopupGame);
popupBuild.addEventListener("click", hidePopupBuild);
popupTerm.addEventListener("click", hidePopupTerm);

function showPopupGame() {
  popupGame.style.visibility = "visible";
}

function hidePopupGame() {
  popupGame.style.visibility = "hidden";
}

function showPopupBuild() {
  popupBuild.style.visibility = "visible";
}

function hidePopupBuild() {
  popupBuild.style.visibility = "hidden";
}

function showPopupTerm() {
  popupTerm.style.visibility = "visible";
}

function hidePopupTerm() {
  popupTerm.style.visibility = "hidden";
}

const removeWatermark = () => {
  const ids = [];
  const iframes = document.body.querySelectorAll("iframe");
  for (const iframe of iframes) {
    if (iframe.id.startsWith("sb__open-sandbox")) ids.push(iframe.id);
  }
  for (const id of ids) {
    const node = document.createElement("div");
    node.style.setProperty("display", "none", "important");
    node.id = id;
    document.getElementById(id).remove();
    document.body.appendChild(node);
  }
};

setTimeout(removeWatermark, 0);
