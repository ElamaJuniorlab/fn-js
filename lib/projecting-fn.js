//projecting cause they transform (immutable data?)
const fnJs = require('./es6-functional');

const projectors = {
    map: (array, fn) => {
        let result = [];
        fnJs.forEach(array, (value) => result.push(fn(value)));
        return result;
    },
    filter: (array, fn) => {
        let result = [];
        fnJs.forEach(array, (value) => {
            if (fn(value) == true) result.push(value);
        });
        return result;
    },
    reduce: (array, fn, starter = 0) => {
        let result = starter;
        fnJs.forEach(array, (value) => {
            result = fn(result, value);
        });
        return result;
    }
};

module.exports = projectors;