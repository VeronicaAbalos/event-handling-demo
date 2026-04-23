const button = document.getElementById("clickBtn");
const textInput = document.getElementById("textInput");
const dropdown = document.getElementById("dropdown");
const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const keyInput = document.getElementById("keyInput");
const hoverBox = document.getElementById("hoverBox");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    output.textContent = "Button clicked!";
});

textInput.addEventListener("input", () => {
    output.textContent = "Typing: " + textInput.value;
});

dropdown.addEventListener("change", () => {
    output.textContent = "Selected: " + dropdown.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    output.textContent = "Form submitted: " + nameInput.value;
});

keyInput.addEventListener("keyup", (e) => {
    output.textContent = "Last key: " + e.key;
});

hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.background = "orange";
    output.textContent = "Mouse over box";
});

hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.background = "lightblue";
    output.textContent = "Mouse left box";
});

textInput.addEventListener("focus", () => {
    textInput.style.background = "#e0f7ff";
});

textInput.addEventListener("blur", () => {
    textInput.style.background = "white";
});