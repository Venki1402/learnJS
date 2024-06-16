
// Ternary Operator

let time = 9;
let greeting = time<12 ? "Good Morning!" : "Good Afternoon!";
console.log(`${greeting}`);

let student = false;
let isStudent = student ? "You are a student" : "You are not a Student";
console.log(`${isStudent}`);


setTimeout(function(){
    let i=0;
    while(i<9000){
        console.log(i);
        i++;
    }
},0);