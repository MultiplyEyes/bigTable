// // Gamefacation

// var smallNum = document.querySelector('#smallNumber');
// var bigNum = document.querySelector('#bigNumber');
// var result = document.querySelector('#result');

// var smallResult;
// var bigResult;
// var finalResult;

// function smallInput(e){
//     smallResult = e.target.value;
//     console.log(smallResult);
// }

// smallNum.addEventListener('input', smallInput);
// smallNum.addEventListener('input', calc);

// function bigInput(e){
//     bigResult = e.target.value;
//     console.log(bigResult);
// }

// bigNum.addEventListener('input', bigInput);
// bigNum.addEventListener('input', calc);


// function calc(){
//     finalResult = smallResult / bigResult;
//     finalResult = finalResult * 100;

//     if(smallResult && bigResult){
//         console.log(finalResult + "%");
//         result.value = finalResult;
//     }
// }

////////////////////////////////////////////////////////////////////////////////
//////////////////////////Required Code/////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
console.log("Required Code");
// From Christian the GOAT

function RequiredOnnOff(inputNames, shouldRequire) {
    inputNames.forEach((name) => {
      var inputElement = document.getElementsByName(name);
      if (shouldRequire) {
        inputElement.forEach((input) => input.setAttribute("required", "true"));
      } else {
        inputElement.forEach((input) => input.removeAttribute("required"));
      }
    });
}

// Question 1B
document.getElementById("oneB1ja").addEventListener("change", function () {
    RequiredOnnOff(["1B.2", "1B.3", "1B.4"], true);
});

document.getElementById("oneB1nee").addEventListener("change", function () {
    RequiredOnnOff(["1B.2", "1B.3", "1B.4"], false);
});

// Question 1C
document.getElementById("twoUnoja").addEventListener("change", function () {
    RequiredOnnOff(["1C.2"], true);
});

document.getElementById("twoUnonee").addEventListener("change", function () {
    RequiredOnnOff(["1C.2"], false);
});

document.getElementById("twoB3ja").addEventListener("change", function () {
    RequiredOnnOff(["1C.3"], true);
});

document.getElementById("twoB3nee").addEventListener("change", function () {
    RequiredOnnOff(["1C.3"], false);
});

// Question 1D

document.getElementById("wowja").addEventListener("change", function () {
    RequiredOnnOff(["1D.2"], true);
});

document.getElementById("wownee").addEventListener("change", function () {
    RequiredOnnOff(["1D.2"], false);
});

////////////////////////////////////////////////////////////////////////////////
//////////////////////////Date Code/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// chatGPT
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split("T")[0];
    const allDateInputs = document.querySelectorAll('input[type="date"]');
  
    allDateInputs.forEach((input) => {
      input.max = today;
    });
});