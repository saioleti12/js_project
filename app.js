{/* <button id="btnblue">Blue</button>
    <button id="btnyellow">Yellow</button>
    <button id="btngreen">Green</button>
    <button id="btnorange">Orange</button>
    <button id="btnbrown">Brown</button>
    <button id="Reset">Reset</button>
 */}


let my_body=document.querySelector("#my_body");
let btnblue=document.querySelector("#btnblue");
let btnyellow=document.querySelector("#btnyellow");
let btngreen=document.querySelector("#btngreen");
let btnorange=document.querySelector("#btnorange");
let btnbrown=document.querySelector("#btnbrown");
let Reset=document.querySelector("#Reset");



btnblue.addEventListener('click', function(){
    my_body.style.background="Blue"
})

btnyellow.addEventListener('click', function(){
    my_body.style.background="yellow"
})



btngreen.addEventListener('click', function(){
    my_body.style.background="Green"
})

btnorange.addEventListener('click', function(){
    my_body.style.background="orange"
})

btnbrown.addEventListener('click', function(){
    my_body.style.background="Brown"
})

Reset.addEventListener('click', function(){
    my_body.style.background="White"
})



