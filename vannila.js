const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const displayMessage = document.querySelector("#output-box");

const calculateSum= (date) =>
{
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) 
  {
    sum = sum + Number(digit);
  }
  return sum;
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  console.log(sumOfDate, numberToCheck);
  if (sumOfDate % numberToCheck === 0)
  {
    displayMessage.innerHTML =`<div 
    style = "background-color:#6EE7B7;color:black;
    text-align: center;
     border-radius:5px;
     margin: 1rem; 
    padding:1rem">Wooh ! ${numberToCheck}is Your Lucky Number🥳🎇🍾</div>`
  }
  else
  {
    displayMessage.innerHTML =`<div 
    style = "background-color:#6EE7B7;color:black;
    text-align: center;
     border-radius:5px;
     margin: 1rem; 
    padding:1rem">🤧 ${numberToCheck} is Not that Lucky 🙃 </div>`
  }
};
checkButton.addEventListener("click", () =>
{
  const date = dateOfBirth.value;
  const numberToCheck = luckyNumber.value;
  if (date && numberToCheck) 
  {
    const sumOfDate = calculateSum(date);
    checkIsNumberLucky(sumOfDate, numberToCheck);
  }
});