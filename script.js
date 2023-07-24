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
  const formattedText = inputText
    .replace(/[^a-zA-Z]+/g, "-")
    .toLowerCase()
    .substring(0, 183);
  document.getElementById("formattedText").innerText = formattedText;
}

function updateCharacterCount() {
  const inputText = document.getElementById("textInput").value;
  const characterCountElement = document.getElementById("characterCount");
  characterCountElement.innerText = `Characters: ${inputText.length}`;

  if (inputText.length > 183) {
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
}
