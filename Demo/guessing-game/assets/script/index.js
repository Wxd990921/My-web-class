
//Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

//Get HTML element by id
function getElement(selector, parent = docunment) {
    return parent.getElementById(selector);
} 

//select HTML element by selector
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const form = select('form');
const numberOne = select('.number-one');
const btn = select('.get-result');
const output = select('.output p'); 
const reset = select('.button');



let random = 10;
console.log(random); 

const second = select('.second');
let i = 30;

 let t = setInterval(countDown, 1000);

 function countDown() {
         console.log(i);
         second.innerHTML = i + 's';

         if (i === 0)
             clearInterval(t);
         i--;
}

function isNumber(str) {
    let input = str.trim();

    if(input.length > 0 && !isNaN(input)) 
        return true;

    return false;  
}



onEvent('click', btn, function() {
    let a = numberOne.value.trim();
    if(isNumber(a)) {
        if(a > random) {
            output.innerText = 'My number is bigger';
             
        } else if (a < random) {
            output.innerText = 'My number is smaller';
              
        } else {
            output.innerText = 'correct';
            clearInterval(t);
             
        };  
    } else {
        output.innerText = 'Please, enter valid numbers';
    }

}); 



onEvent('click', reset, function() {
    numberOne.value = '';
    output.innerText = '';
    location.reload();
})





