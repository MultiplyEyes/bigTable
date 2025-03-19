// Gamefacation

var smallNum = document.querySelector('#smallNumber');
var bigNum = document.querySelector('#bigNumber');
var result = document.querySelector('#result');

var smallResult;
var bigResult;
var finalResult;

function smallInput(e){
    smallResult = e.target.value;
    console.log(smallResult);
}

smallNum.addEventListener('input', smallInput);
smallNum.addEventListener('input', calc);

function bigInput(e){
    bigResult = e.target.value;
    console.log(bigResult);
}

bigNum.addEventListener('input', bigInput);
bigNum.addEventListener('input', calc);


function calc(){
    finalResult = smallResult / bigResult;
    finalResult = finalResult * 100;

    if(smallResult && bigResult){
        console.log(finalResult + "%");
        result.value = finalResult;
    }
}