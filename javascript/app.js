const diposit = document.getElementById('diposit-balance').addEventListener('click', function () {
    const inputField = document.getElementById('diposit-input');
    const inputBalance = inputField.value;
    // set empty value to the input field
    inputField.value = '';
    const newInputBalance = parseFloat(inputBalance);
    // get value from previous diposit balance
    const myDipostPrevious = document.getElementById('diposit-previous');
    const myBalance = myDipostPrevious.innerText
    const myNewBalance = parseFloat(myBalance);
    // add two balance 
    const totalDiposit = myNewBalance + newInputBalance;
    myDipostPrevious.innerText = totalDiposit;
    // now add current diposit blance to main balance
    const myMainBalance = document.getElementById('main-Balance');
    const newMainBalance = parseFloat(myMainBalance.innerText)
    const mainBalanceTotal = totalDiposit + newMainBalance;
    myMainBalance.innerText = mainBalanceTotal;

})