// Store the wallet amount to your local storage with key "amount"

let amount=document.querySelector("#amount");
let wallet=document.querySelector("#wallet");

showMoney();
function showMoney(){
    let amount1=(localStorage.getItem("amount")) || 0;
    // amount1=amount1+amount.value;
    wallet.innerText=amount1;
    // localStorage.setItem("amount",amount1);

}

function addMoney(){
    let amount1=(localStorage.getItem("amount")) || 0;
    amount1=Number(amount1)+Number(amount.value);
    wallet.innerText=amount1;
    localStorage.setItem("amount",amount1);

}
