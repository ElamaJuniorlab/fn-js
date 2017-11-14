const projectors = require('./../lib/projecting-fn');

//
// MAP
//

let strangeObjects = [
    {
        let: "it code",
        i: "did it my way",
        say: "you desire"
    },
    {
        let: "it be",
        i: "don't know why",
        say: "me something"
    }
];

let alteredObjects = projectors.map(strangeObjects, (object) => {
    return {
        let: object.say
    }
});

console.log(alteredObjects);

//
// Filter
//

let numbers = [1,2,3,4,5,6,7,8,9,10];

let odd = projectors.filter(numbers, (number) => number % 2 != 0);
let even = projectors.filter(numbers, (number) => number % 2 == 0);

console.log(odd);
console.log(even);

//
// Reduce
//

let sum = projectors.reduce(numbers, (a, b) => {return a + b}, 0);

console.log(sum);

let integers = [1, 2, 3, 4];

let factorial = projectors.reduce(integers, (a, b) => {return a * b}, 1);

console.log(factorial);