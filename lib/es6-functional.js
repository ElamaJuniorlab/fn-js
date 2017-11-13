const fn = {
    forEach: (array, fn) => {
        let i;
        for(i = 0; i < array.length; i++)
            fn(array[i])
    },

    forEachObject: (obj, fn) => {
        for (let property in obj ) {
            if (obj.hasOwnProperty(property)) {
                fn(property, obj[property])
            }
        }
    },
    unless: (predicate, fn) => {
        if (!predicate) {
            fn.call()
        }
    },
    times: (amount, fn) => {
        for (let i = 0; i < amount; i++)
            fn(i)
    },
    every: (collection, fn) => {
        let result = true;
        for (const value of collection) {
            result = fn(value) && result;
            if (! result)
                break
        }
        return result;
    },
    some: (collection, fn) => {
        let result = false;
        for (const value of collection) {
            result = fn(value) || result;
            if (result)
                break
        }
        return result;
    },
    // tap/1 - useful debug function. Fairly good in combination with fn.forEach/2
    // or Array.prototype.forEach/1
    tap: (value) => {
        return (fn) => {
            typeof fn === 'function' && fn(value),
                console.log(value)
        }
    },
    once: (fn) => {
        let done = false;
        return (args) => {
            if (done) {
                null
            } else {
                done = true;
                fn(args);
            }
        }
    },
    memoized: (fn) => {
        const lookupTable = {};

        return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg));
    }
};

module.exports = fn;
