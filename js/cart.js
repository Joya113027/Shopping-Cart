let cartAlert = document.querySelector('#cart_alert');
//let cartAlert = document.getElementById("cart_alert");
let showAlert = document.querySelector('#show_alert');
let card1=document.querySelector('#product1');
let card2=document.querySelector('#product2');
let card3=document.querySelector('#product3');
let ul=document.querySelector('ul');





cartAlert.addEventListener('click', showcart);
card1.addEventListener('click', addtocart1);
card2.addEventListener('click', addtocart2);
card3.addEventListener('click', addtocart3);




function showcart(e){
//     <div class="alert alert-success" role="alert">
//   <h4 class="alert-heading">Well done!</h4>
//   <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
//   <hr>
//   <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
// </div>

// showAlert.setAttribute('class','alert alert-success');
// showAlert.setAttribute('role','alert');
// let h=document.createElement('h4');
// h.appendChild(document.createTextNode('your cart=0'));
// // console.log(h);
// showAlert.appendChild(h);
if(!ul.hasChildNodes()){
    let p=document.createElement('p');
    p.appendChild(document.createTextNode('your cart is empty'));
    showAlert.appendChild(p);

}else{
    showAlert.removeChild(showAlert.children[1]);
}


}

function addtocart1(e){
    let li=document.createElement('li');
    li.appendChild(document.createTextNode('Blue Sneaker   '));
    ul.appendChild(li);
    let link=document.createElement("a");
        link.setAttribute("href","#");
        link.innerHTML="   Remove From Cart";
        li.appendChild(link);
    
    
}

function addtocart2(e){
    let li=document.createElement('li');
    li.appendChild(document.createTextNode('Red Sneaker'));
    ul.appendChild(li);
    let link=document.createElement("a");
        link.setAttribute("href","#");
        link.innerHTML="   Remove From Cart";
        li.appendChild(link);
}
function addtocart3(e){
    let li=document.createElement('li');
    li.appendChild(document.createTextNode('White Sneaker'));
    ul.appendChild(li);
    let link=document.createElement("a");
        link.setAttribute("href","#");
        link.innerHTML="   Remove From Cart";
        li.appendChild(link);
}