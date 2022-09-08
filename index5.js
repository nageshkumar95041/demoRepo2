let x=document.querySelector(".navbar")
console.log(x.innerHTML)
x.innerHTML+="<button>click<button/>"
x.innerHTML+="<h1>hi raj</h1>"
const y=document.getElementsByTagName("button")
console.log(y.innerText)
x.classList.add("bg-blue")
// x.classList.remove("navbar")
console.log(x.classList);
let btn=document.querySelectorAll("button");
btn[2].addEventListener("click",function(){
    console.log(this)
    console.log("clicked")
    this.setAttribute("class","bg-blue")
})

// event object;

// when user click on function 
// it return function with event target

// let button=document.querySelectorAll("button");
// console.log(button)
// button.forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//      e.target.style.backgroundColor="yellow";
//      e.target.style.color="white";
     
//     })
// })

const body=document.body;
body.addEventListener("keypress",(e)=>{
    console.log(e.key)
   const arr=[];
   arr.push(e.key);

})

// event delegation 

//Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

let grandParent=document.querySelector(".grand-parent");
let child=document.querySelector(".child");
let parent=document.querySelector(".parent");


// grandParent.addEventListener("click",(e)=>{
//     console.log(e.target)
// })

grandParent.addEventListener("click",(e)=>{
    // console.log(e.target)
    console.log("gf clicked")
})
parent.addEventListener("click",(e)=>{
    // console.log(e.target)
    console.log("parent clicked")
})
child.addEventListener("click",(e)=>{
    // console.log(e.target)
    console.log("child clicked")
})

// event capturing

grandParent.addEventListener("click",(e)=>{
    // console.log(e.target)
    console.log("gf clicked")
},true)
parent.addEventListener("click",(e)=>{
    // console.log(e.target)
    console.log("parent clicked")
},true)
child.addEventListener("click",(e)=>{
    // console.log(e.target)
    console.log("child clicked")
},true)
