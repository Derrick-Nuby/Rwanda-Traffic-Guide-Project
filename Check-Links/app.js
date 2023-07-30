const number = document.getElementById("number");
const button = document.getElementById("button");
let clickCount = 0;

button.addEventListener("click", function checkpost() {
  clickCount++;
  const formattedCount = String(clickCount).padStart(3, "0");
  number.textContent = formattedCount;
  const link = `http://rwandatrafficguide.com/rtg${formattedCount}`;

  window.open(link, "_blank");
});
