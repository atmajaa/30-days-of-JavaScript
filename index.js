//alert("Hi Its Atmaja");
let myName = "Atmaja";
let age = 18;
console.log(myName + " is " + age + " years old");
const points = 42;
//Strings
let movie = "The talented Mr. Ripley";
//getting characters
console.log(movie[8]);
//getting length
console.log(movie.length);
//String methods
console.log(movie.toUpperCase());
console.log(movie.toLowerCase());
console.log(movie.indexOf('r'));
let fruit = "Strawberry";
//let result = fruit.replace('r', 'a');
//let result = fruit.slice(2,8);
let result = fruit.substring(2,8);
console.log(result);

//Operations
console.log(10%2);
console.log(10+2*9/(2/8));
console.log(10-(-9));

//String Literals
let student = "Atmaja";
let role = "Web Developer";
console.log(`My name is ${student} and I am a ${role}`);

//Arrays
let countries = ["India","Japan","China"];
console.log(countries[0]);
let random = ["cool","hair",78,45.2,'a'];
console.log(random);
console.log(random.length);
console.log(random.join('-'));

let newArr = countries.concat(['Denmark','Luxembourg']);
console.log(newArr);
//Alters the original 
console.log(countries.push("Mexico"));
console.log(countries.push("Newzealand"));
console.log(countries.pop());
console.log(countries[3]);

console.log(age == 18);

//Loops
for(let i=0; i<newArr.length; i++){
    //console.log(i);
    console.log(newArr[i]);
}
let i = 3;
while(i<5){
    //alert(i);
    i++;
}
if(age<18){
    console.log("Not of legal age to drink!");
}
else{
    console.log("Legal");
}

//Operators
const password = "password123";
if(password.length>=8 && password.includes('@')){
    console.log("Strong!");
}
else if(password.length>=8){
    console.log("Good!");
}
else{
    console.log("Weak");
}


//FUNCTION
//1. Regular Function
//2. Function Expression
//3. Arrow Function

//Hoisting
greet();
//Wont work
//speak();

//Functions
function greet(){
    console.log("Hello there!");
}
//Hoisting doesnot work with function expression
//function expression
const speak = function(name){
    console.log(`Good Day ${name}`);
}
speak('Atmaja');

//Setting default value
const speak1 = function(name="kia"){
    console.log(`Good Day ${name}`);
};
speak1();

//Returning value from a function
//const calcArea = function(radius){
  //  return 3.14 * radius**2;
//};

//Shorter way
const calcArea = (radius) => {
    return 3.14 * radius**2;
};

console.log(calcArea(3));

//Arrow Function
const score = () => console.log("Your score is 64");

score();

//for each
let color = ["purple", "pink", "blue","cherry"];
color.forEach(color => {
    console.log(color)});