// script.js
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const saveButton = document.getElementById("saveButton");

// Load saved preferences (if any)
const savedFontSize = localStorage.getItem("fontSize");
const savedFontColor = localStorage.getItem("fontColor");

if (savedFontSize) {
  fontSizeInput.value = savedFontSize;
  document.body.style.fontSize = savedFontSize + "px";
}

if (savedFontColor) {
  fontColorInput.value = savedFontColor;
  document.body.style.color = savedFontColor;
}

// Save preferences when the "Save" button is clicked
saveButton.addEventListener("click", () => {
  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  localStorage.setItem("fontSize", fontSize);
  localStorage.setItem("fontColor", fontColor);

  document.body.style.fontSize = fontSize + "px";
  document.body.style.color = fontColor;
});
