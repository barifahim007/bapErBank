const moneyWithdraw = document.getElementById('withdraw-balance').addEventListener('click', function () {
    const withDrawField = document.getElementById('withdraw-field');
    const myWithdraw = parseFloat(withDrawField.value)
    // now empty the withdraw field
    withDrawField.value = '';
    // get the element from main withdraw balance
    const withdrawMoneyAdd = document.getElementById('withdraw-add')
    const previousWithdraw = parseFloat(withdrawMoneyAdd.innerText);
    // now add this withdraw money
    const totalWithdraw = previousWithdraw + myWithdraw;
    withdrawMoneyAdd.innerText = totalWithdraw;
    // get the main balance
    const mainBalance = document.getElementById('main-Balance');
    const newBalance = parseFloat(mainBalance.innerText)
    // substraction main balance and withdraw balance
    const currentNewBalance = newBalance - totalWithdraw;
    mainBalance.innerText = currentNewBalance;
}) 