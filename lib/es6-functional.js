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
    }
};

module.exports = fn;
