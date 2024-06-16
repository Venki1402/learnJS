let numbers = [1,2,3,4,5,6,7];
let evenNumbers = numbers.filter(function(element){
    return element%2 == 0;
});
console.log(evenNumbers);

function isEven(element){
    return element%2 === 0;

}

const myObj = () => console.log("Hello!");
myObj();