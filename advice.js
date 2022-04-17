const aSelec = document.getElementById("aSelec");
const pText = document.getElementById("text");
const bg = document.getElementsByClassName("general-container");
const adviseCon = document.getElementsByClassName("advise-container");

const getAdviceOnLoad = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      printOnScreen(pText, aSelec, data);
    });
};

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      printOnScreen(pText, aSelec, data);
    });
};

const printOnScreen = async (pText, aSelec, data) => {
  pText.innerHTML = `"${data.slip.advice}"`;
};

getAdviceOnLoad();
