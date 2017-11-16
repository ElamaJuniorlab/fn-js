# fn-js
functional approach in javascript

## Curring

Currying is a process of converting a function with n number
of arguments into a nested unary(`function/1`) function.

    const add = (x,y) => x + y;

Curried

    const addCurried = x => y => x + y;

curry function definition
```javascript
//ES5
const curry = (binaryFn) => {
    return function (firstArg) {
        return function (secondArg) {
            return binaryFn(firstArg, secondArg);
        };
    };
};

//ES6
const curry = (binaryFn) =>
    (firstArg) =>
        (secondArg) =>
            binaryFn(firstArg, secondArg);
```

### Example: multiplication table
```javascript
//Old'n'cold approach
const tableOf2 = (y) => 2 * y
const tableOf3 = (y) => 3 * y
const tableOf4 = (y) => 4 * y
```

```javascript
//Fun-fun-functional curring

// Pure function(supposed to be so) to calculate multiplication operation
const genericTable = (x,y) => x * y

//Curring arrived
const tableOf2 = curry(genericTable)(2)
const tableOf3 = curry(genericTable)(3)
const tableOf4 = curry(genericTable)(4)

console.log("Tables via currying")
console.log("2 * 2 =",tableOf2(2))
console.log("2 * 3 =",tableOf2(3))
console.log("2 * 4 =",tableOf2(4))
```