/** JS usually runs through our program synchronously - executes code line by line
 * But when we need Javascript to do something that takes a long time we use something known as 
 * asynchronous programming. We donot want the browser to freeze or the user to keep waiting 
 * for that one particular task to complete since JS is a single threaded programming language.
 * Meaning it cannot do multiple things at a time. So when javascript encounters the below piece 
 * of code 
 * */

console.log("This will be printed first");
setTimeout(()=>console.log("This will be printed third"), 1000);
console.log("This will be printed second");

/**What happens in the above code is - JavaScript goes through the code line by line.
 * but when it encounter the setTimeout() it keep it aside - sort of in a todo list to be executed
 * later. It then goes to the next line returns the function value and then goes back to the 
 * todo list and executes the task. 
 */

/* Get random cat images through API */

/*Fetch does take some time to fetch data from some other place so we have to wait for it to fetch and display the results. 
 * The code below will return a Promise
 * A promise - is something that JS says hey! this takes some time to get from the server/backend but I promise 
 * you that I will return the value */

//fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1");

/** So in order to not get a promise everytime we fetch some data we need to wait for JS to
 * complete the fetching. For that purpose we use the keyword await before fetch. Which means that hey I dont want
 * the promise I want the actual data and I can wait for it. This is obv done asynchronously.
 */

/** Promises in JS comes into picture when we are doing things that takes a lot of time.
 * It takes a lot of time to fetch data from a network so JS writes a "IOU" for the data value
 * it doesnt have yet. aka a promise of a value.
 * Promises can be in 3 possible states - 
 * 1. Pending
 * 2. fulfilled aka resolved
 * 3. rejected
 * It takes time for promises to resolve hence they are asynchronous.
 */

/**
 * await lets us tell JS to stop and wait for an asunchronous operation to finish.
 * 
 */

/**
 * One interesting observation is that CommonJS does not allow top-level await. 
 * Top-level await is basically what we are doing in the code below. Using await
 * without async function. To use top-level await we need to specify the type as module
 */

/**Javascript PRETENDS that this await operation is synchronous */
let image = document.getElementById("catImg");
let btn = document.getElementById("btn");
btn.addEventListener("click", async function(){
    let response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1");
    //console.log(response);
    let body = await response.json();
    console.log(body);
    image.src = body[0].url;
})
