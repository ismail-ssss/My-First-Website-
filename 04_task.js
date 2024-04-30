let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

btn1.addEventListener("click", function () {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

class TextChanger {
  constructor() {
    this.textElement = document.getElementById("headline");
    this.fontSizeSelector = document.getElementById("btn2");
    this.fontFamily = document.getElementById("btn3");
    this.textField = document.getElementById("textField");

    this.fontSizeSelector.addEventListener("change", () =>
      this.changeTextSize()
    );
    this.fontFamily.addEventListener("change", () => this.changeFontFamily());
    this.textField.addEventListener("input", () => this.changeTextContent());
  }

  changeTextSize() {
    const newSize = this.fontSizeSelector.value + "px";
    this.textElement.style.fontSize = newSize;
  }

  changeFontFamily() {
    const newFontFamily = this.fontFamily.value;
    this.textElement.style.fontFamily = newFontFamily;
  }

  changeTextContent() {
    const newTextContent = this.textField.value;
    this.textElement.textContent = newTextContent;
  }
}
// Initialize the class
const textChanger = new TextChanger();

btn4.addEventListener("click", function () {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.color = randomColor;
});

btn5.addEventListener("click", function () {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("headline").style.backgroundColor = randomColor;
});

// let result = document.getElementById("js2");
// result.innerHTML = Name;
