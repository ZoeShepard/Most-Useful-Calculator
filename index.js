let numArr = [];
let numBtn = false;
let checkBtn = false;
let randNum = 0;
const display = document.getElementById("display");

const btn1 = document.querySelector('#numberBtn');
btn1.addEventListener('click', () => {
    randNum = Math.floor(Math.random()*10);
    numBtn = true;
    display.value =randNum;
    console.log(randNum);
    console.log(numBtn);
});

const btn2 = document.querySelector('#checkBtn');
btn2.addEventListener('click', () =>{
    checkBtn = true;
    console.log(checkBtn);
    if(numBtn === true && checkBtn === true && numArr.length == 0){
        numArr.push(randNum);
        console.log(randNum);
        display.value = randNum;
       console.log(numArr.length);
    }else if(numBtn === true && checkBtn === true && numArr.length > 0){
        numArr.push(randNum);
        console.log(randNum);
        display.value = arrayToString(numArr);
       console.log(numArr.length);
       console.log(numArr);
    }else{
        display.value = "Error";
    };
});

const btn3 = document.querySelectorAll('.operatorBtn');
btn3.forEach ((btn4) => {
    btn4.addEventListener('click',() =>{
        console.log("lol");
        if(numBtn === true && checkBtn === true ){
            // display.value += input;
        }else if (numBtn === true && checkBtn === false ){
            display.value = "Error";
        }else{
            console.log('lol');
        }
    });
})  


function arrayToString(numArr){
    let result = '';
    for (let i=0; i<numArr.length; i++){
        result += numArr[i];
    }
    return result;
    console.log(result);
};

function appendToDisplay(input){
 display.value += input;
 numArr.push(input);
 console.log(numArr);
};


function clearDisplay(){
    display.value = "";
    numArr = [];
    numBtn = false;
    checkBtn = false;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}




