"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_konva_1 = require("react-konva");
const React = __importStar(require("react"));
const immutable_1 = require("immutable");
const zeroClockState = () => ({
    time: new Date(Date.now())
});
const get_number_pos = (numeric, clock_radius, full_round) => {
    let x = Math.cos(((numeric - 3) / 12) * full_round);
    let y = Math.sin(((numeric - 3) / 12) * full_round);
    let offset;
    if (x < 0) {
        offset = 0.95;
    }
    else {
        offset = 0.9;
    }
    return { x: x * (clock_radius * offset), y: y * (clock_radius * offset) };
};
function Clock() {
    const [clockState, setState] = React.useState(zeroClockState());
    const { time } = clockState;
    React.useEffect(() => {
        const get_time = setInterval(() => {
            setState((s) => ({ ...s, time: new Date(Date.now()) }));
        }, 1000);
        return function cleanup() {
            clearInterval(get_time);
        };
    });
    const canvasWidth = 420;
    const canvasHeight = 420;
    const center_x = canvasWidth / 2;
    const center_y = canvasHeight / 2;
    const clock_radius = 200;
    const full_round = 2 * Math.PI;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const hour_distance = (1 / 12) * full_round;
    const hour_pos_x = Math.sin(((((hours - 12) / 12)) * full_round) + (hour_distance * (minutes / 60))) * (clock_radius * 0.6);
    const hour_pos_y = Math.cos((((hours - 12) / 12) * full_round) + (hour_distance * (minutes / 60))) * (clock_radius * 0.6);
    const minute_pos_x = Math.sin((minutes / 60) * full_round) * (clock_radius * 0.8);
    const minute_pos_y = Math.cos((minutes / 60) * full_round) * (clock_radius * 0.8);
    const seconds_pos_x = Math.sin((seconds / 60) * full_round) * (clock_radius * 0.8);
    const seconds_pos_y = Math.cos((seconds / 60) * full_round) * (clock_radius * 0.8);
    const clock_labels = immutable_1.Map()
        .set(1, "I")
        .set(2, "II")
        .set(3, "III")
        .set(4, "IV")
        .set(5, "V")
        .set(6, "VI")
        .set(7, "VII")
        .set(8, "VIII")
        .set(9, "IX")
        .set(10, "X")
        .set(11, "XI")
        .set(12, "XII");
    return (React.createElement(React.Fragment, null,
        React.createElement(react_konva_1.Stage, { className: "clock", height: canvasHeight, width: canvasWidth, style: {
                backgroundColor: "#73e6da"
            } },
            React.createElement(react_konva_1.Layer, null,
                React.createElement(react_konva_1.Circle, { x: center_x, y: center_y, radius: clock_radius, stroke: "#e67f09" }),
                clock_labels.keySeq().map((numeric) => {
                    let pos = get_number_pos(numeric, clock_radius, full_round);
                    return (React.createElement(react_konva_1.Text, { key: numeric, fontSize: 20, text: clock_labels.get(numeric), x: center_x + pos.x, y: center_y + pos.y }));
                }),
                React.createElement(react_konva_1.Line, { x: 0, y: 0, stroke: "#29023b", points: [
                        center_x,
                        center_y,
                        center_x + hour_pos_x,
                        center_y - hour_pos_y
                    ] }),
                React.createElement(react_konva_1.Line, { x: 0, y: 0, stroke: "#29023b", points: [
                        center_x,
                        center_y,
                        center_x + minute_pos_x,
                        center_y - minute_pos_y
                    ] }),
                React.createElement(react_konva_1.Line, { x: 0, y: 0, stroke: "#e0073a", points: [
                        center_x,
                        center_y,
                        center_x + seconds_pos_x,
                        center_y - seconds_pos_y
                    ] })))));
}
exports.default = Clock;
