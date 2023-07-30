const main_txt =
  ". RwandaTrafficGuide.Com Ibibazo N' ibisubizo By' amategeko Y' umuhanda.";

document.addEventListener("DOMContentLoaded", function () {
  const textParagraph = document.getElementById("formattedText");
  const inputElement = document.getElementById("textInput");

  textParagraph.addEventListener("click", function () {
    copyToClipboard(textParagraph.innerText);
  });

  inputElement.addEventListener("input", function () {
    formatText();
    updateCharacterCount();
  });

  document.getElementById("formatButton").addEventListener("click", formatText);
});

function formatText() {
  const inputText = document.getElementById("textInput").value;

  const replacedText = inputText
    .replace(/([b-d]\))/gi, ",")
    .replace(/([a]\))/gi, " ");
  const formattedText = replacedText;
  document.getElementById("formattedText").innerText = formattedText + main_txt;
}

function updateCharacterCount() {
  const inputText = document.getElementById("textInput").value;
  const characterCountElement = document.getElementById("characterCount");
  characterCountElement.innerText = `Characters: ${inputText.length}`;

  if (inputText.length > 113) {
    characterCountElement.style.color = "red";
  } else {
    characterCountElement.style.color = "initial";
  }
}

function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  const outputElement = document.getElementById("formattedText");
  outputElement.style.color = "#4CAF57";
}

function clearAll() {
  document.getElementById("textInput").value = "";
  document.getElementById("formattedText").innerText = "";
  updateCharacterCount();
  const outputElement = document.getElementById("formattedText");
  outputElement.style.color = "#000000";
}
