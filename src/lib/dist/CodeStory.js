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
class CodeStory extends React.Component {
    constructor(props) {
        super(props);
        this.newLine = () => statemachine_1.Call(() => this.setState(s => ({ ...s, program_counter: s.program_counter + 1 })));
        this.print = (v) => statemachine_1.Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, v) })));
        this.appendValue = (v) => statemachine_1.Call(() => this.setState(s => {
            let current = "";
            if (s.code_story.has(s.program_counter)) {
                current = s.code_story.get(s.program_counter);
            }
            return ({ ...s, code_story: s.code_story.set(s.program_counter, current + v) });
        }));
        this.clear = () => statemachine_1.Call(() => this.setState({ program_counter: 0, code_story: immutable_1.Map() }));
        this.writeLine = (sentence, timeout = 100, accellerate = false) => sentence.split("").reduce((xs, x, i) => {
            return statemachine_1.Seq(xs, statemachine_1.Seq(statemachine_1.Timer(timeout / (accellerate ? i + 1 : 1)), this.appendValue(x)));
        }, statemachine_1.Done());
        this.writeLines = (phrases, timeout = 100, accellerate = false) => phrases.map(phrase => this.writeLine(phrase, timeout, accellerate)).reduce((xs, x) => statemachine_1.Seq(xs, statemachine_1.Seq(this.newLine(), x)), statemachine_1.Done());
        this.writeHtml = (tag, innerText, timeout = 100, accellerate = false) => statemachine_1.Seq(this.appendValue(`<${tag}>`), statemachine_1.Seq(this.writeLine(innerText, timeout, accellerate), this.appendValue(`</${tag}>`)));
        this.mkList = (list_type, ...items) => statemachine_1.Seq(this.appendValue(`<${list_type}>`), statemachine_1.Seq(items.map(item => this.writeHtml('li', item, 100, true)).reduce((xs, x) => statemachine_1.Seq(xs, statemachine_1.Seq(statemachine_1.Timer(200), x)), statemachine_1.Done()), this.appendValue(`</${list_type}>`)));
        this.state = {
            program_counter: 0,
            code_story: immutable_1.Map(),
            isRunning: false
        };
        this.code_my_story = this.code_my_story.bind(this);
    }
    code_my_story() {
        this.setState(s => ({ ...s, isRunning: true }));
        let program = [
            this.clear(),
            this.writeLines([
                "This is how I started my coding journey",
                "It all started with..."
            ], 200, true),
            this.writeHtml('code', 'print("Hello World!!!")'),
            this.writeLines([
                "Yeah how could be different?",
                "Everyone starts like that.",
                "Right?"
            ], 200, true),
            this.mkList('ol', "Item 1", "Item 2", "Item 3"),
            this.writeLine("Have more questions about me?"),
            this.writeLine("Feel free to ask me any question!"),
            this.print("Mail me <a href='mailto:s.koerts2@gmail.com'>here</a>"),
        ].reduce((xs, x) => statemachine_1.Seq(xs, statemachine_1.Seq(statemachine_1.Seq(statemachine_1.Timer(1000), this.newLine()), x)), statemachine_1.Done());
        let interval = setInterval(() => {
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
    render() {
        return React.createElement(React.Fragment, null,
            React.createElement("h2", null,
                "My story in code ",
                React.createElement("button", { disabled: this.state.isRunning, className: "btn btn-success", onClick: this.code_my_story }, "Start the show!")),
            React.createElement("div", { className: "code" }, this.state.code_story.toIndexedSeq().toArray().map((value, index0) => {
                return React.createElement("p", { key: index0, dangerouslySetInnerHTML: { __html: value } });
            })));
    }
}
exports.default = CodeStory;
