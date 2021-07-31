"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawCircle = exports.drawHollowSquare = exports.drawTriangle_reversed = exports.drawTriangle = exports.drawSquare = exports.drawLine = void 0;
const func_1 = require("./func");
let drawLine = (n) => func_1.Func(char => {
    if (n <= 0) {
        return "";
    }
    return char + exports.drawLine(n - 1).f(char);
});
exports.drawLine = drawLine;
let drawSquare = (n) => exports.drawLine(n).then(func_1.Func(line => line + "<br>")).repeat().f(2);
exports.drawSquare = drawSquare;
let drawTriangle = (n) => func_1.Func(char => Array(n).fill(0).map((_, i) => exports.drawLine(i + 1).f(char)).reduce((xs, x) => xs + x + "<br>", ""));
exports.drawTriangle = drawTriangle;
let drawTriangle_reversed = (n) => func_1.Func(char => Array(n).fill(0).map((_, i) => exports.drawLine(n - i).f(char)).reduce((xs, x) => xs + x + "<br>", ""));
exports.drawTriangle_reversed = drawTriangle_reversed;
let drawHollowSquare = (n, char) => {
    let res = "";
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if (y == 0 || y == n - 1 || x == 0 || x == n - 1) {
                res += char;
            }
            else {
                res += " ";
            }
        }
        res += "<br>";
    }
    return res;
};
exports.drawHollowSquare = drawHollowSquare;
let drawCircle = (diameter, char, hollow = false) => {
    let center_x = diameter / 2;
    let center_y = diameter / 2;
    let circle = "";
    for (let y = 0; y <= diameter + 1; y++) {
        for (let x = 0; x <= diameter + 1; x++) {
            let distance = Math.ceil(Math.sqrt((center_x - x) ** 2 + (center_y - y) ** 2));
            if (((distance <= diameter / 2) && !hollow) || ((distance == Math.floor(diameter / 2)) && hollow)) {
                circle += char;
            }
            else {
                circle += " ";
            }
        }
        circle += "<br>";
    }
    return circle;
};
exports.drawCircle = drawCircle;
