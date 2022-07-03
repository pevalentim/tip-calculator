// calculate tip %
// return tip and total bill value with tip

let inputBill = document.getElementById('inputBill');
let inputTip = document.getElementById('inputTip');
console.log(inputBill);
console.log(inputTip);
let button = document.getElementById('button');
console.log(button);
/* button.addEventListener('click', calc()) */

function calc(event){
    event.preventDefault();
    let bill= parseInt(inputBill.value);
    console.log(bill);
    let tip = parseInt(inputTip.value);
    console.log(tip);
    let tipTotal = bill * (tip / 100); //tip value
    console.log(tipTotal)
    let billTotal = bill + tipTotal; //total bill with tip
    console.log(billTotal);
    let result = document.getElementById('result');
    result.innerHTML = `<p>Your tip amount: ${tipTotal}</p>`
    result.innerHTML += `<p>Your total bill (with tip): ${billTotal}</p>`
}