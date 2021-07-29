export let Func = (f) => {
    return {
        f: f,
        then: function (g) {
            return Func(x => g.f(this.f(x)));
        },
        repeat: function () {
            return Func(n => repeat(this, n));
        },
        repeatUntil: function () {
            return Func(p => repeatUntil(this, p));
        }
    };
};
export let Identity = () => Func(x => x);
let repeat = function (f, n) {
    if (n <= 0) {
        return Identity(); // Return the identity function when n <= 0, basicly means do nothing
    }
    else {
        return f.then(repeat(f, n - 1)); // Else build a chain then's, pass f around and decrement n
    }
};
let repeatUntil = function (f, predicate) {
    let g = (x) => {
        if (predicate.f(x)) {
            return Identity().f(x); // If predicate is true apply the identity function to x
        }
        else {
            return f.then(repeatUntil(f, predicate)).f(x); // Else build a chain of then's pass f around and apply f to x
        }
    };
    return Func(g);
};