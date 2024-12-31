const quiz = [
    {   question: "JavaScript was invented in 1999?",
        answer: false,
    },
    {   question: "Strings in JS are immutable",
        answer: true,
    },
    {   question: "Js considers null as an object?",
        answer: true,
    }
    
]
let count = 0;
const jsQuestions = document.querySelector(".jsQuestions");
const trueBtn = document.getElementById("trueBtn");
const falseBtn = document.getElementById("falseBtn");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", function(){
    trueBtn.disabled = false;
    falseBtn.disabled = false;
    trueBtn.style.backgroundColor = "white";
    falseBtn.style.backgroundColor = "white";
    if(count <= quiz.length-1){
        count++;
        jsQuestions.textContent = quiz[count].question;
    }
})

trueBtn.addEventListener("click", function(){
    if(quiz[count].answer == true){
        trueBtn.style.backgroundColor = "green";
    }
    else{
        trueBtn.style.backgroundColor = "red";
    }
    
    trueBtn.disabled = true;
    falseBtn.disabled = true;

})

falseBtn.addEventListener("click", function(){
    if(quiz[count].answer == false){
        falseBtn.style.backgroundColor = "green";
    }
    else{
        falseBtn.style.backgroundColor = "red";
    }
    
    trueBtn.disabled = true;
    falseBtn.disabled = true;
})