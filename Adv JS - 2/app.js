/**
 * Destructing is a fancy way of declaring multiple variable at once by
 * extracting values from an object with their property name
 */

const students =[
    {regNo : "23MCA10088", cgpa : 8.0},
    {regNo : "23MCA10089", cgpa : 8.7},
    {regNo : "23MCA10085", cgpa : 6.0},
];

/**
 * The code below is essentially doing is - 
 * pulls out the regNo and cgpa from the students array (first obj)
 * take the value of 1st item in the students array, takes its property regNo
 * and assigns the value of regNo to a variable name regNo.
 * Similiarly, pulls out the value of its cgpa property and assign it to a variable named cgpa.
 */

// Destructuring Object
let {regNo, cgpa} = students[0];
console.log(regNo);
console.log(cgpa);

/**Objects in JS doesnot follow a particular order like arrays in JS */

/**
 * Order matters when we are desructuring arrays.
 */

// Destrucing array
let [one, two, three] = [1,2,3];
console.log(one)

//Async function
async function getDogData(){
    const response = await fetch("https://dog.ceo/api/breed/hound/list");
    const body = await response.json();
    const {message} = body;
    return message;
}
console.log(await getDogData());

