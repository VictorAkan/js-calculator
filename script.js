// Get User Inputs



 

// console.log(billAmount);

// Number of people im helping
let tipRecipient = document.getElementById('tipRecipientNo')
let bill = document.getElementById('billAmount');

// let tipRecipientNo = tipRecipient

// console.log(tipRecipientNo);
// Get Percentage Values

let tipPercent = 0



function getTipPercent(percent) {
     tipPercent = percent
     console.log(tipRecipient);
    //  console.log(persent)
     alert(percent)
}

let tipBtn = document.querySelectorAll('.tip')

// console.log(tipBtn);
tipBtn.forEach (function (button) {
    button.addEventListener('click', function () {
        getTipPercent(button.textContent)
    });
});

// Pay bill
let billAmount = bill.value
let tipRecipientNo = document.getElementById('tipRecipientNo');
let noOfPeople = document.getElementById('noOfPeople');
let billOuputAmount = document.getElementById('billOutputAmount')

let payBillBtn = document.getElementById('paybill');

let loader = document.getElementById('loader')
let loaderText = document.getElementById('loaderText')
let totalTip = document.getElementById('totalTip')



payBillBtn.addEventListener('click', function() {
    let fixed = document.getElementById('loader');
    //let whiteGuy = document.getElementById('whiteGuy')
    //let blackGuy = document.getElementById('blackGuy')
    console.log(fixed);
    loaderText.textContent = 'calculating bill.......'
    fixed.style.background = 'radial-gradient(#9b59b6, #8c44ad)'
    setTimeout(() => {
        fixed.classList.toggle('.d-none')
    }, 5000);
    fixed.classList.toggle('d-none');

    billOuputAmount.textContent = bill.value;
    noOfPeople.textContent = tipRecipientNo.value;
    tipAmount = (billOuputAmount * tipPercent ) / 100;
    totalTip.textContent = tipAmount;
    tipPerPerson.textContent = (tipAmount  / tipRecipientNo.value);
    totalBill.textContent = tipAmount + (billOuputAmount.textContent);
})
console.log(payBillBtn)

function reset() {
    loaderText.textContent = 'Reseting......';
    fixed.style.background = "#000";
    setTimeout(() => {
       fixed.classList.toggle('d-none')
    })
    //whiteGuy.style.display = 'block'
    //blackGuy.style.display = 'none'
}
// console.log(reset)   
//let fivePercentBtn = document.getElementById('fivePercent')
//console.log (fivePercentBtn.innerHTML);
//console.log (fivePercentBtn.textContent)

