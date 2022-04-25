// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let url="https://www.omdbapi.com/?apikey=42c22a13";
let wallet=document.querySelector("#wallet");
let input=document.querySelector("#search");
let div=document.querySelector("#movies");
let id;
showMoney();
function showMoney(){
    let amount1=(localStorage.getItem("amount")) || 0;
    // amount1=amount1+amount.value;
    wallet.innerText=amount1;
    // localStorage.setItem("amount",amount1);

}

async function getdata(){
    try{
        let res=await fetch(`${url}&s=${input.value}`);
        let data=await res.json();
        data=data.Search;
        console.log(data);
        return data;
    }
    catch(err){
        console.log("err:"+err);
    }
}

function showdata(data){
    div.innerHTML=null;
    data.forEach((el) => {
        let card=document.createElement("div");
        let img1=document.createElement("img");
        img1.src=el.Poster;
        let title1=document.createElement("p");
        title1.innerText=el.Title;
        let btn1=document.createElement("button");
        btn1.setAttribute("class","book_now");
        btn1.innerText="Book Now";
        btn1.onclick=function(){
            addmovie(el);
        }
        card.append(img1,title1,btn1);
        div.append(card);
    })
}

function addmovie(el){
    let arr=[];
    arr.push(el);
    localStorage.setItem("movie",JSON.stringify(arr));
    window.location.href="checkout.html";
}

async function main(){
    let data=await getdata();
    if(data==undefined){
        return false;
    }
    showdata(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay)
}