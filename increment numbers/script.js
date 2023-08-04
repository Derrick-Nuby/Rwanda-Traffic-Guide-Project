document.addEventListener("DOMContentLoaded", function () {
  const textParagraph = document.getElementById("formattedText");
  const numberInput = document.getElementById("numberInput");
  const incrementNumber = document.getElementById("incrementNumber");
  const copy = document.getElementById("copy");

  incrementNumber.addEventListener("click", function () {
    incrementNumber();
  });

  textParagraph.addEventListener("click", function () {
    copyToClipboard(textParagraph.innerText);
  });

  copy.addEventListener("click", function () {
    copyToClipboard(textParagraph.innerText);
  });

  numberInput.addEventListener("input", function () {
    formatText();
  });

  document.getElementById("formatButton").addEventListener("click", formatText);
});

function formatText() {
  const numberInput = document.getElementById("numberInput").value;

  const fullText = `#RTGQ${numberInput}`;

  document.getElementById("formattedText").innerText = fullText;
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
  document.getElementById("formattedText").innerText = "";
  const outputElement = document.getElementById("formattedText");
  outputElement.style.color = "#000000";
}

function incrementNumber() {
  const numberInput = parseInt(document.getElementById("numberInput").value);
  const incrementedNumber = numberInput + 1;

  const fullText = `#RTGQ${incrementedNumber}`;

  document.getElementById("numberInput").value = incrementedNumber;
  document.getElementById("formattedText").innerText = fullText;
}
