
var wishList=[];
var list=document.getElementById("productList");
var secondList=document.getElementById("whislist");

function addItem(itemId){
    var p= document.getElementById('advice');
    if(wishList.includes(document.getElementById(itemId).innerHTML)){
        p.innerText="this item was allready added";
        p.style.color="red";
    }else{
        console.log(itemId);
        var li=document.createElement('li');
        li.innerText=document.getElementById(itemId).innerHTML;
        secondList.appendChild(li);
        wishList.push(document.getElementById(itemId).innerHTML);
        p.innerText="item added succesfully";
        p.style.color="green";
    }
}