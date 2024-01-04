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
const mkReact = (jsx) => ({ kind: 'react', jsx: jsx });
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
        this.printLazy = (printer) => statemachine_1.Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, mkText(printer())) })));
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
        this.writeHtml = (tag, innerText, attr = {}, timeout = 100, accellerate = false) => statemachine_1.Seq(this.appendText(`<${tag} ${utils_1.parseAttribute(attr)} >`), statemachine_1.Seq(this.writeLine(innerText, timeout, accellerate), this.appendText(`</${tag}>`)));
        this.mkList = (list_type, ...items) => statemachine_1.Seq(this.appendText(`<${list_type}>`), statemachine_1.Seq(items.map(item => this.writeHtml('li', item, {}, 100, true)).reduce((xs, x) => statemachine_1.Seq(xs, statemachine_1.Seq(statemachine_1.Timer(200), x)), statemachine_1.Done()), this.appendText(`</${list_type}>`)));
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
        this.flickeringCircle = (size, counter) => {
            if (counter <= 0) {
                return statemachine_1.Done();
            }
            return statemachine_1.Seq(this.print(utils_1.drawCircle(size, "*")), statemachine_1.Seq(statemachine_1.Timer(400), statemachine_1.Seq(this.print(utils_1.drawCircle(size, "*", true)), statemachine_1.Seq(statemachine_1.Timer(400), this.flickeringCircle(size, counter - 1)))));
        };
        this.renderReact = (name) => {
            if (this.props.stack.has(name)) {
                return statemachine_1.Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(s.program_counter, mkReact(this.props.stack.get(name))) })));
            }
            return statemachine_1.Done();
        };
        this.state = zeroCodeStoryState();
        this.code_my_story = this.code_my_story.bind(this);
        this.printLazy = this.printLazy.bind(this);
        this.getVar = this.getVar.bind(this);
    }
    code_my_story() {
        this.setState(s => ({ ...s, isRunning: true }));
        let interval_time = 500;
        let program = [
            this.clear(),
            this.writeHtml("h1", "Welcome to my story."),
            this.renderReact('profile_picture_start'),
            this.print("This story is a poem I wrote."),
            this.print("I slowly wrote it in code."),
            this.writeHtml("h3", "Stay creative."),
            this.askInput("Start the show!", "button"),
            this.clear(),
            this.writeHtml('h1', "Code == Poetry"),
            this.writeLines([
                "When people ask:",
                "How do you do all that",
                "coding?",
                "Well...",
                "I'am just fluently",
                "following",
                "the fine flow of my",
                "functions",
                "with a fixed format,",
                "finding focus",
                "filling in formalities.",
                "That's just a fraction",
                "of my file.",
                "Trying to find a flow.",
                "Finally finished fixing",
                "factorial faults",
                "before its Friday",
                "and catches fire."
            ], 500, true),
            statemachine_1.Timer(500),
            this.print("Well..."),
            this.writeLine("Give that a thought."),
            statemachine_1.Timer(1500),
            this.clear(),
            this.writeHtml('h1', "Tech stack"),
            this.mkList('ul', "C#/.NET", "Typescript/Javascript", "React", "Python", "PHP (when no choice)", "no(SQL)"),
            statemachine_1.Timer(1500),
            this.writeHtml('h2', "Want to see some fun stuff?"),
            statemachine_1.Timer(500),
            this.askInput('Yes show me!', 'button'),
            this.clear(),
            this.print("Give me a number:"),
            this.askInput("x", 'number'),
            this.print("And a character:"),
            this.askInput("char", 'string'),
            this.clear(),
            this.print("Let's make some shapes!"),
            this.printLazy(() => `Size: ${this.getVar('x')}`),
            this.printLazy(() => `Character: ${this.getVar('char')}`),
            this.printLazy(() => utils_1.drawSquare(Number(this.getVar('x'))).f(String(this.getVar('char'))[0])),
            statemachine_1.Timer(3000),
            this.clear(),
            this.printLazy(() => utils_1.drawCircle(Number(this.getVar('x')), String(this.getVar('char'))[0])),
            statemachine_1.Timer(3000),
            this.clear(),
            this.writeLines([
                "Wait a second...",
                "I can make fancy animations",
                "with these shapes",
            ], 200, true),
            statemachine_1.Timer(500),
            this.clear(),
            statemachine_1.Seq(this.growingSquare(1, 10), statemachine_1.Seq(this.flickeringSquare(10, 10), this.shrinkingSquare(10))),
            this.clear(),
            statemachine_1.Seq(this.growingCircle(4, 20), statemachine_1.Seq(this.flickeringCircle(20, 10), this.shrinkingCircle(20))),
            statemachine_1.Timer(500),
            this.clear(),
            this.print("Hoped you enjoyed this"),
            this.print("story in code."),
            this.writeLines([
                "As more code flows",
                "my story will grow.",
            ], 150, true),
            this.writeLines([
                "Curious about my other",
                "projects?",
                "Or want to know",
                "how I build this site?",
                "Check out my",
            ], 200, true),
            this.writeHtml('a', 'GitHub', { href: 'https://github.com/Steven24K', target: '_blank' }, 150, true),
            this.print('<h3>Have any questions?</h3>'),
            this.print("<b>Feel free to sent me an email</b>"),
            this.writeHtml('a', 'Mail me', { href: 'mailto:s.koerts2@gmail.com' }, 100, true),
            this.renderReact('profile_picture_end'),
            statemachine_1.Timer(10000),
            this.renderReact('clock'),
            this.print("-----THE END-----"),
        ].reduce((xs, x) => statemachine_1.Seq(xs, statemachine_1.Seq(statemachine_1.Seq(statemachine_1.Timer(interval_time), this.newLine()), x)), statemachine_1.Done());
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
        return React.createElement("div", { className: 'code' }, this.state.code_story.toIndexedSeq().toArray().map((value, index) => {
            if (value.kind == 'text') {
                return React.createElement("p", { key: index, dangerouslySetInnerHTML: { __html: value.text } });
            }
            if (value.kind == 'react') {
                return value.jsx;
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
        }));
    }
}
exports.default = CodeStory;
