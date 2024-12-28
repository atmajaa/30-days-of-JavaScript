//alert(typeof "Atmaja");
//return object but null is actually a primitive data type. It's just a JS bug.
console.log(typeof null);
console.log(typeof "Atmaja".length);
var lang = "JavaScript";
console.log(lang[6]);
console.log(lang.indexOf("Scri"));
console.log(lang.indexOf("I"));
console.log(lang.includes("script"));
console.log(lang.includes("a"));
console.log(lang.startsWith("Java"));
//Advance JS
//Getting element from DOM
let btn = document.getElementById("testBtn");
let changeTxt = document.getElementById("text");
//Returns live HTML Collection
//let changeTxt = document.getElementsByTagName("text");
//Event Handlers
btn.addEventListener("click", function(){
    changeTxt.textContent = "Hi there!";
})
//Arrow Functions
const divide = (x,y) => x/y;
const result = divide(9,3);
console.log(result);

const whisper = (speak) => speak.toLowerCase();
const result1 = whisper("WHAT R U DOING");
console.log(result1)

//Disable and enable a button
//setAtrribute property JS
function disable(btn){
    btn.setAttribute("disabled", "")//Even if we dont mention the attribute the DOM just looks for the disable property and applies it on the button
}
disable(btn);

//Scope
//Let and scope
let testScope = "I'm outside the function"//Here the variable testScope is pointing to the test 'I'm outside the function'
function checkScope(){
    testScope = "I'm inside the function";//Now in context of let, the variable testScope now points towards the text 'I'm inside the function' and looses its pointer to the previous text.
    console.log("Testing in the function... " + testScope);
}
checkScope();
//lost its earlier pointer 
console.log("Testing outside function... " + testScope)

//Block scope
//var vs let
let testBlockScope = "outside block";
console.log("Before block..." + testBlockScope);
{
    let testBlockScope = "inside block";
}
console.log("outside block and after block ..." + testBlockScope);

//Testing the same for var

var testBlockScope1 = "outside block";
console.log("Before block..." + testBlockScope1);
{
    var testBlockScope1 = "inside block";
}
console.log("outside block and after block ..." + testBlockScope1);

