 //initilization

let item=document.querySelectorAll('.card-title');
let btn = document.querySelectorAll('.classItem');
let show_live=document.querySelector('#show_alert');
// let cart_btn=document.querySelector('#cart_alert');
let ul=document.querySelector('#ul');

//eventlistener

btn.forEach((value,index)=>{
    btn[index].addEventListener('click',(e)=>{
        addtocart(e,index);
    });
});

ul.addEventListener('click',removetask);

// cart_btn.addEventListener('click',display);

//function

function addtocart(e,index){
    // console.log(item[index].innerHTML);
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(item[index].textContent));
    ul.appendChild(li);
    let link=document.createElement("a");
        link.setAttribute("href","#");
        link.innerHTML="x";
        li.appendChild(link);
    
}

// function display(){
//     show_live.setAttribute('style','display:block');
// }

// function showalert(e){
//     li=document.createElement('li');
//     let a=li.appendChild(item[index].innerHTML);
//     console.log(a);
// }
function removetask(e){
    // console.log(e.target);
    if(e.target.hasAttribute("href")){
        
            let ele=e.target.parentElement;
            console.log(ele);
            
            ele.remove();
            
        
      
    }
    e.preventDefault();
    }