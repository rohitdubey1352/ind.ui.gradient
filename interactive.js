const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const copyContent = document.querySelector(".copyContent");

let rgb1 = "#ffa500";
let rgb2 = "#800080";

const hexaValues = () => {
  let hexaValue = "0123456789abcdef";
  let colours = "#";
  for (let i = 0; i < 6; i++) {
    colours = colours + hexaValue[Math.floor(Math.random() * 16)];
  }
  return colours;
};

const handleButton1 = () => {
  rgb1 = hexaValues();
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  button1.innerText = rgb1;
  copyContent.innerText = `background: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

const handleButton2 = () => {
  rgb2 = hexaValues();
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  button2.innerText = rgb2;
  copyContent.innerText = `background: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

button1.addEventListener("click", handleButton1);
button2.addEventListener("click", handleButton2);

copyContent.addEventListener("click", () => {
  navigator.clipboard.writeText(copyContent.innerText);
  alert("copied!");
});
