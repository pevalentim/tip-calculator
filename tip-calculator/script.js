// calculate tip %
// return tip and total bill value with tip

const inputBill = document.querySelector('#inputBill');
const inputTip = document.querySelector('#inputTip');
const button = document.querySelector('#button');

function calc(event){
    event.preventDefault();
    let bill= (parseInt(inputBill.value));
    let tip = (parseInt(inputTip.value));
    let tipTotal = bill * (tip / 100); //tip value
    let billTotal = bill + tipTotal; //total bill with tip
    let result = document.getElementById('result');
    result.innerHTML = `<p>Your tip amount: ${tipTotal}</p>`
    result.innerHTML += `<p>Your total bill (with tip): ${billTotal}</p>`
}