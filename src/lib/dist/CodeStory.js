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
        this.writeLine = (sentence, timeout = 10, accellerate = false) => sentence.split("").reduce((xs, x, i) => {
            return statemachine_1.Seq(xs, statemachine_1.Seq(statemachine_1.Timer(timeout / (accellerate ? i + 1 : 1)), this.appendText(x)));
        }, statemachine_1.Done());
        this.writeLines = (phrases, timeout = 10, accellerate = false) => phrases.map(phrase => this.writeLine(phrase, timeout, accellerate)).reduce((xs, x) => statemachine_1.Seq(xs, statemachine_1.Seq(this.newLine(), x)), statemachine_1.Done());
        this.writeHtml = (tag, innerText, attr = {}, timeout = 10, accellerate = false) => statemachine_1.Seq(this.appendText(`<${tag} ${utils_1.parseAttribute(attr)} >`), statemachine_1.Seq(this.writeLine(innerText, timeout, accellerate), this.appendText(`</${tag}>`)));
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
        this.renderReact = (jsx) => {
            return statemachine_1.Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(s.program_counter, mkReact(jsx)) })));
        };
        this.state = zeroCodeStoryState();
        this.code_my_story = this.code_my_story.bind(this);
        this.printLazy = this.printLazy.bind(this);
        this.getVar = this.getVar.bind(this);
    }
    code_my_story() {
        this.setState(s => ({ ...s, isRunning: true }));
        let interval_time = 500;
        let year_graduated = 2020;
        let years_of_experience = new Date().getUTCFullYear() - year_graduated;
        let program = [
            this.writeHtml('h1', 'Hello world, I am Steven!'),
            this.writeLine('I am a passionate software developer living in Rotterdam, The Netherlands.'),
            this.writeLine(`Currently I have ${years_of_experience} years of experience as a fullstack developer. The main tech stack I use is:`),
            this.mkList('ul', 'C#/.NET', 'Typescript', 'React', 'Python', 'PHP (Only if there is no budget)', 'no(SQL)'),
            this.writeLines([
                'Allthough I would consider myself a backend developer, these modern days the frontend is getting more and more powerfull than ever before.',
                'So it becomes more common that a backend developer is also needed to program the frontend.',
                'I rather do not touch the design or CSS for the frontend (I mean look at this site),',
                'but you can always wake me up in the middle of the night to discuss a complex or abstact programming paradigm.'
            ]),
            this.writeLine('If you want to see some projects I have worked on then checkout my'),
            this.writeHtml('a', 'GitHub', { href: 'https://github.com/Steven24K', target: '_blank' }, 150, true),
            this.writeLine("Feel free to sent me an email if you have any questions for me"),
            this.writeHtml('a', 's.koerts2@gmail.com', { href: 'mailto:s.koerts2@gmail.com' }, 100, true),
            this.writeLine('In real life you can spot me at the theatre, a poetry night or open mic event performing stand-up comedy.'),
            this.writeLine('I am greeting you in the most human way possible a software developer knows how.'),
            this.writeHtml('h3', 'Kind regards,'),
            this.writeHtml('h2', 'Steven Koerts'),
            this.renderReact(React.createElement("div", null,
                React.createElement("img", { style: { maxWidth: '300px', width: '40%', display: 'inline-block' }, width: 'auto', alt: "profile-steven-koerts", src: "./images/StevenKoerts1.JPG" }),
                React.createElement("img", { style: { maxWidth: '300px', width: '40%', display: 'inline-block' }, width: 'auto', alt: "profile-steven-koerts", src: "./images/StevenKoerts2.JPG" }))),
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
                return React.createElement("input", { key: index, maxLength: 1, autoFocus: true, value: (input.toString()), onChange: e => this.setState(({ ...this.state, user_input: this.state.user_input.set(value.name, e.target.value) })) });
            }
            if (value.type == 'number') {
                let input = this.state.user_input.has(value.name) ? this.state.user_input.get(value.name) : '';
                return React.createElement("input", { key: index, value: (input.toString()), autoFocus: true, type: "number", onChange: e => this.setState(({ ...this.state, user_input: this.state.user_input.set(value.name, Number(e.target.value)) })) });
            }
            if (value.type == 'button') {
                return React.createElement("div", null,
                    React.createElement("button", { key: index, className: `btn btn-${'success'}`, onClick: () => this.setState(s => ({ ...s, user_input: s.user_input.set(value.name, true) })) }, value.name));
            }
        }));
    }
}
exports.default = CodeStory;
