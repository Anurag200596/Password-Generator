const upper = "MNBVCXZASDFGHJKLPOIUYTREWQ"
const lower = "zmxncbvalskdjfhgqpwoeiruty"
const number = "0123456789"
const symbol= "!@#$%^&*()_+-/<>~=[]{}?"
const coll = upper+lower+number+symbol
let box = document.querySelector("#password")
let btn = document.querySelector(".gen")
let copybtn = document.querySelector(".copy")
function createpassword(){
    let password = ""
    const length =12;
    password+=upper[Math.floor(Math.random()*upper.length)]
    password+=lower[Math.floor(Math.random()*lower.length)]
    password+=number[Math.floor(Math.random()*number.length)]
    password+=symbol[Math.floor(Math.random()*symbol.length)]
    while(length > password.length){
        password+=coll[Math.floor(Math.random()*coll.length)]
    }
    box.value=password
}
btn.addEventListener("click",()=>{
    createpassword()
})
function copypassword(){
    box.select()
    dpcument.execommand("copy")
}
copybtn.addEventListener("click",()=>{
    copypassword()
})