"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = exports.Func = void 0;
let Func = (f) => {
    return {
        f: f,
        then: function (g) {
            return exports.Func(x => g.f(this.f(x)));
        },
        repeat: function () {
            return exports.Func(n => repeat(this, n));
        },
        repeatUntil: function () {
            return exports.Func(p => repeatUntil(this, p));
        }
    };
};
exports.Func = Func;
let Identity = () => exports.Func(x => x);
exports.Identity = Identity;
let repeat = function (f, n) {
    if (n <= 0) {
        return exports.Identity(); // Return the identity function when n <= 0, basicly means do nothing
    }
    else {
        return f.then(repeat(f, n - 1)); // Else build a chain then's, pass f around and decrement n
    }
};
let repeatUntil = function (f, predicate) {
    let g = (x) => {
        if (predicate.f(x)) {
            return exports.Identity().f(x); // If predicate is true apply the identity function to x
        }
        else {
            return f.then(repeatUntil(f, predicate)).f(x); // Else build a chain of then's pass f around and apply f to x
        }
    };
    return exports.Func(g);
};
