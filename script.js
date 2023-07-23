document.addEventListener("DOMContentLoaded", function () {
  const textParagraph = document.getElementById("formattedText");

  textParagraph.addEventListener("click", function () {
    copyToClipboard(textParagraph.innerText);
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
function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
