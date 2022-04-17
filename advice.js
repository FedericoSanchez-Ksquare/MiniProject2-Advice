const aSelec = document.getElementById("aSelec");
const pText = document.getElementById("text");
const bg = document.getElementsByClassName("general-container");
const adviseCon = document.getElementsByClassName("advise-container");
let buttonDisabled = false;

function colorChange() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let thergb = "rgb(" + red + "," + green + "," + blue + "," + 0.5 + ")";
  document.body.style.background = thergb;
}
const getAdviceOnLoad = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      printOnScreen(pText, aSelec, data);
    });
};

const getAdvice = () => {
  if (buttonDisabled === false) {
    buttonDisabled = true;
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        printOnScreen(pText, aSelec, data);
        colorChange();
        setTimeout(() => {
          buttonDisabled = false;
        }, 2000);
      });
  }
};

const printOnScreen = async (pText, aSelec, data) => {
  pText.innerHTML = `"${data.slip.advice}"`;
  aSelec.href = `https://twitter.com/intent/tweet?text=${pText.textContent}`;
};
colorChange();
getAdviceOnLoad();
