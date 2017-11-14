const fn = require('./../lib/es6-functional');
// import forEach from './../lib/import-test'; js only

let array = [1, 2, 3];
let objectO = {
    a: 1,
    b: 2,
    c: 3
};

fn.tap("Gold is cold")((value) => console.log("value is", value));
fn.tap("Gold is cold")(false);
// forEach(array, (number) => console.log(number) );
fn.forEach(array, (number) => console.log(number) );
fn.forEachObject(objectO, (key, value) => console.log(key + " : " + value));
fn.unless((10 < 5),
    () => {console.log('You are wrong')}
);

fn.forEach([1,2,3,4,5,6,7], (number) => {
    fn.unless((number % 2),
        () => console.log(number, " is even")
    )
});

fn.times(10, (number) => {
    fn.unless(number % 2,
        () => console.log(number, ' is even')
    )
});

console.log(fn.every([1,2,3,4,5,6], (number) => number > 6));
console.log(fn.some([1,2,3,4,5,6,7], (number) => number > 6));

let memoizedFactorial = fn.memoized((n) => {
    if (n === 0) {
        return 1;
    }

    return n * memoizedFactorial(n-1);
});

console.log(memoizedFactorial(5));