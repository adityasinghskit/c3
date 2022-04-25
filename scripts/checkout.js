// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let wallet = document.querySelector("#wallet");
let div= document.querySelector("#movie");
let seats=document.querySelector("#number_of_seats");

showMoney();
showMovie()
function showMoney() {
    let amount1 = (localStorage.getItem("amount")) || 0;
    // amount1=amount1+amount.value;
    wallet.innerText = amount1;
    // localStorage.setItem("amount",amount1);

}

function showMovie() {
    let el = JSON.parse(localStorage.getItem("movie"));
    let card = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = el[0].Poster;
    let title1 = document.createElement("p");
    title1.innerText = el[0].Title;
    card.append(img1,title1);
    div.append(card);

}

function getBooking() {
    let bill=Number(seats.value)*100;
    let amount=localStorage.getItem("amount");
    amount=Number(amount)-bill;
    console.log(amount);
    if(amount<0){
        alert("Insufficient Balance!");
    }else{
        alert("Booking successful!");
        localStorage.setItem("amount",amount);
        showMoney();
    }


}
