// let cart_alert=document.querySelector('#cart_alert');
// let card_1=document.querySelector('#product1');
// let card_2=document.querySelector("#product2");
// let card_3=document.querySelector("#product3");
// let text = document.getElementsByClassName('card-title');
//  // let card_title=document.getElementsByClassName('card-title');

//  cart_alert.addEventListener('click',show_alert);
//  card_1.addEventListener('click',addtolist);
//  card_2.addEventListener('click',addtolist);
//  card_3.addEventListener("click",addtolist);


// function show_alert(){
//  }
//  function addtolist(){
//     //  li=document.createElement("li");
//     //  li.appendChild();
//     // text.forEach(ele => {
//     //     ele=ele+1;
//     //     console.log(ele);
//     // });
    
// //     const text=document.getElementsByTagName('h5');


// // console.log(text.children);
    
//  }

// // 
// console.log(text[0].innerHTML);

let text = document.querySelectorAll('.card-title');
let btn = document.querySelectorAll('.classItem');

//btn[0].addEventListener('click', addToCart);
btn.forEach((value, index)=>{
    btn[index].addEventListener('click', (event)=>{
        addToCart(event,index);
       //console.log(index);
    });
})

text.forEach(myfunction);
function myfunction(ele,index){
  //console.log(text[index].innerHTML);
}

// text.forEach((element, index) => {
//     console.log(text[index].innerHTML);
// });

function addToCart(e,index){
console.log(text[index].innerHTML);
}

//checking git