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
const immutable_1 = require("immutable");
const React = __importStar(require("react"));
const statemachine_1 = require("./statemachine");
const utils_1 = require("./utils");
const mkText = (v) => ({ kind: 'text', text: v });
const mkInput = (name, type) => ({ kind: 'input', name: name, type: type });
const zeroCodeStoryState = () => ({
    program_counter: 0,
    code_story: immutable_1.Map(),
    isRunning: false,
    user_input: immutable_1.Map(),
});
let interval;
class CodeStory extends React.Component {
    constructor(props) {
        super(props);
        this.newLine = () => statemachine_1.Call(() => this.setState(s => ({ ...s, program_counter: s.program_counter + 1 })));
        this.print = (v) => statemachine_1.Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, mkText(v)) })));
        this.askInput = (input_name, type) => statemachine_1.Seq(statemachine_1.Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, mkInput(input_name, type)) }))), statemachine_1.Wait(() => this.state.user_input.has(input_name)));
        this.getVar = (name) => this.state.user_input.has(name) ? this.state.user_input.get(name) : false;
        this.appendText = (v) => statemachine_1.Call(() => this.setState(s => {
            let newText = mkText(v);
            if (s.code_story.has(s.program_counter)) {
                let current = s.code_story.get(s.program_counter);
                if (current.kind == 'text') {
                    newText.text = current.text + newText.text;
                }
            }
            return ({ ...s, code_story: s.code_story.set(s.program_counter, newText) });
        }));
        this.clear = () => statemachine_1.Call(() => this.setState(s => ({ ...s, program_counter: 0, code_story: immutable_1.Map() })));
        this.writeLine = (sentence, timeout = 100, accellerate = false) => sentence.split("").reduce((xs, x, i) => {
            return statemachine_1.Seq(xs, statemachine_1.Seq(statemachine_1.Timer(timeout / (accellerate ? i + 1 : 1)), this.appendText(x)));
        }, statemachine_1.Done());
        this.writeLines = (phrases, timeout = 100, accellerate = false) => phrases.map(phrase => this.writeLine(phrase, timeout, accellerate)).reduce((xs, x) => statemachine_1.Seq(xs, statemachine_1.Seq(this.newLine(), x)), statemachine_1.Done());
        this.writeHtml = (tag, innerText, timeout = 100, accellerate = false) => statemachine_1.Seq(this.appendText(`<${tag}>`), statemachine_1.Seq(this.writeLine(innerText, timeout, accellerate), this.appendText(`</${tag}>`)));
        this.mkList = (list_type, ...items) => statemachine_1.Seq(this.appendText(`<${list_type}>`), statemachine_1.Seq(items.map(item => this.writeHtml('li', item, 100, true)).reduce((xs, x) => statemachine_1.Seq(xs, statemachine_1.Seq(statemachine_1.Timer(200), x)), statemachine_1.Done()), this.appendText(`</${list_type}>`)));
        this.growingSquare = (start_size, max_size) => {
            if (start_size >= max_size) {
                return statemachine_1.Done();
            }
            return statemachine_1.Seq(this.print(utils_1.drawSquare(start_size).f('*')), statemachine_1.Seq(statemachine_1.Timer(200), this.growingSquare(start_size + 1, max_size)));
        };
        this.shrinkingSquare = (start_size) => {
            if (start_size <= 0) {
                return statemachine_1.Done();
            }
            return statemachine_1.Seq(this.print(utils_1.drawSquare(start_size).f('*')), statemachine_1.Seq(statemachine_1.Timer(200), this.shrinkingSquare(start_size - 1)));
        };
        this.flickeringSquare = (size, counter) => {
            if (counter <= 0) {
                return statemachine_1.Done();
            }
            return statemachine_1.Seq(this.print(utils_1.drawSquare(size).f("*")), statemachine_1.Seq(statemachine_1.Seq(statemachine_1.Timer(400), this.print(utils_1.drawHollowSquare(size, '*'))), statemachine_1.Seq(statemachine_1.Timer(400), this.flickeringSquare(size, counter - 1))));
        };
        this.growingCircle = (start_size, max_size) => {
            if (start_size > max_size) {
                return statemachine_1.Done();
            }
            return statemachine_1.Seq(this.print(utils_1.drawCircle(start_size, '*')), statemachine_1.Seq(statemachine_1.Timer(200), this.growingCircle(start_size + 1, max_size)));
        };
        this.shrinkingCircle = (start_size) => {
            if (start_size <= 1) {
                return statemachine_1.Done();
            }
            return statemachine_1.Seq(this.print(utils_1.drawCircle(start_size, '*')), statemachine_1.Seq(statemachine_1.Timer(200), this.shrinkingCircle(start_size - 1)));
        };
        this.state = zeroCodeStoryState();
        this.code_my_story = this.code_my_story.bind(this);
        this.getVar = this.getVar.bind(this);
        // TODO: bind all functions
    }
    code_my_story() {
        this.setState(s => ({ ...s, isRunning: true }));
        let program = [
            this.askInput('hello', 'string'),
            statemachine_1.Timer(1000),
            this.print(this.getVar('hello').toString()),
            this.clear(),
            this.print("Why write your story in text?"),
            this.print("When you can code!"),
            this.writeLine("Press the button below to start my coding story.", 100, true),
            this.askInput('Start the show', 'button'),
            this.print("Allright!"),
            this.writeLines([
                "...",
                "...",
                "...",
                "Let's get started",
            ], 200, true),
            this.clear(),
            this.writeLines([
                "I started writing my first HTML in highschool, with some CSS",
                "What I did use for the backend?"
            ], 100, true),
            this.writeHtml('code', '&lt?php ?&gt;'),
            this.writeLines([
                "Yeah, I know...",
                "Not my favorite language, but you got to start somewhere",
                "And it does do the job",
                "I also learned programming with the LEGO Mindstorms block editor",
                "I still have the robot",
                "Playing with LEGO never get's old."
            ], 200, true),
            statemachine_1.Timer(500),
            this.clear(),
            this.writeLines([
                "Later I learned drawing shapes on the command line",
                "Like these:"
            ], 200, true),
            this.print(utils_1.drawSquare(5).f("*")),
            this.print("or"),
            this.print(utils_1.drawCircle(6, "*")),
            this.print("and"),
            this.print(utils_1.drawHollowSquare(5, "*")),
            this.writeLines([
                "I can make any size",
                "with any character"
            ]),
            statemachine_1.Timer(500),
            this.clear(),
            this.print("Give me a number"),
            this.askInput("x", 'number'),
            this.print("Now give 1 character or symbol"),
            this.askInput("char", 'string'),
            this.clear(),
            this.print(`Drawing with size: ${this.getVar('x')} and char: ${this.getVar('char')}`),
            this.print(utils_1.drawSquare(Number(this.getVar('x'))).f(String(this.getVar('char'))[0])),
            this.print(utils_1.drawCircle(Number(this.getVar('x')), String(this.getVar('char'))[0])),
            this.writeLines([
                "Wait a second...",
                "I can make fancy animations with these"
            ], 200, true),
            this.clear(),
            // TODO: Start growing and shrinking animations
        ].reduce((xs, x) => statemachine_1.Seq(xs, statemachine_1.Seq(statemachine_1.Seq(statemachine_1.Timer(700), this.newLine()), x)), statemachine_1.Done());
        interval = setInterval(() => {
            program.update();
            if (!program.busy) {
                clearInterval(interval);
                this.setState(s => ({ ...s, isRunning: false }));
            }
        }, 10);
    }
    componentDidMount() {
        this.code_my_story();
    }
    componentWillUnmount() {
        clearInterval(interval);
    }
    render() {
        return React.createElement(React.Fragment, null,
            React.createElement("h2", null, "My story in code"),
            React.createElement("div", { className: "code" }, this.state.code_story.toIndexedSeq().toArray().map((value, index) => {
                if (value.kind == 'text') {
                    return React.createElement("p", { key: index, dangerouslySetInnerHTML: { __html: value.text } });
                }
                if (value.type == 'string') {
                    let input = this.state.user_input.has(value.name) ? this.state.user_input.get(value.name) : '';
                    return React.createElement("input", { key: index, value: (input.toString()), onChange: e => this.setState(({ ...this.state, user_input: this.state.user_input.set(value.name, e.target.value) })) });
                }
                if (value.type == 'number') {
                    let input = this.state.user_input.has(value.name) ? this.state.user_input.get(value.name) : '';
                    return React.createElement("input", { key: index, value: (input.toString()), type: "number", onChange: e => this.setState(({ ...this.state, user_input: this.state.user_input.set(value.name, Number(e.target.value)) })) });
                }
                if (value.type == 'button') {
                    return React.createElement("button", { key: index, className: `btn btn-${'success'}`, onClick: () => this.setState(s => ({ ...s, user_input: s.user_input.set(value.name, true) })) }, value.name);
                }
            })));
    }
}
exports.default = CodeStory;
