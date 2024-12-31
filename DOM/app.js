const cont1 = document.getElementById("container");
const cont2 = document.getElementById("container2");
const btn = document.getElementById("btn");
let text1 = document.querySelector(".c1text");
let text2 = document.querySelector(".c2text");
btn.addEventListener("click", function(){
    if(text1.textContent !== ""){
        text1.textContent =  "";
        text2.textContent = "I'm outside the box";
        cont1.style.height = "20px";
    }
    else{
        text2.textContent =  "";
        text1.textContent = "I'm inside the box";
        cont1.style.height = "65px";
    }
    
})