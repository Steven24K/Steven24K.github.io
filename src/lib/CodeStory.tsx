import { Map } from 'immutable'
import * as React from 'react'
import { Call, Seq, Done, Timer, StateMachine, Wait, CallIf, } from './statemachine'
import { BootstrapButtonStyle, drawCircle, drawHollowSquare, drawLine, drawSquare, HtmlAttributes, HtmlTag, InputType, parseAttribute } from './utils'


type Text = { kind: 'text', text: string }
type Input = { kind: 'input', name: string, type: InputType }

type CodeStack = Text | Input

const mkText = (v: string): Text => ({ kind: 'text', text: v })
const mkInput = (name: string, type: InputType): Input => ({ kind: 'input', name: name, type: type })

interface CodeStoryState {
    program_counter: number
    code_story: Map<number, CodeStack>
    isRunning: boolean
    user_input: Map<string, string | number | boolean>
}

const zeroCodeStoryState = (): CodeStoryState => ({
    program_counter: 0,
    code_story: Map<number, CodeStack>(),
    isRunning: false,
    user_input: Map<string, string | number | boolean>(),
})
interface CodeStoryProps {

}

let interval: any
export default class CodeStory extends React.Component<CodeStoryProps, CodeStoryState> {
    constructor(props: CodeStoryProps) {
        super(props)
        this.state = zeroCodeStoryState()

        this.code_my_story = this.code_my_story.bind(this)
        this.printLazy = this.printLazy.bind(this)
        this.getVar = this.getVar.bind(this)
        // TODO: bind all functions
    }

    newLine = (): StateMachine => Call(() => this.setState(s => ({ ...s, program_counter: s.program_counter + 1 })))


    print = (v: string): StateMachine => Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, mkText(v)) })))

    askInput = (input_name: string, type: InputType): StateMachine => Seq(Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, mkInput(input_name, type)) }))), Wait(() => this.state.user_input.has(input_name)))

    getVar = (name: string): string | number | boolean => this.state.user_input.has(name) ? this.state.user_input.get(name)! : false

    printLazy = (printer: () => string): StateMachine => Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, mkText(printer())) })))


    appendText = (v: string): StateMachine => Call(() => this.setState(s => {
        let newText = mkText(v)
        if (s.code_story.has(s.program_counter)) {
            let current = s.code_story.get(s.program_counter)!
            if (current.kind == 'text') {
                newText.text = current.text + newText.text
            }
        }
        return ({ ...s, code_story: s.code_story.set(s.program_counter, newText) })
    }))

    clear = (): StateMachine => Call(() => this.setState(s => ({ ...s, program_counter: 0, code_story: Map<number, CodeStack>() })))

    writeLine = (sentence: string, timeout = 100, accellerate = false): StateMachine => sentence.split("").reduce((xs, x, i) => {
        return Seq(xs, Seq(Timer(timeout / (accellerate ? i + 1 : 1)), this.appendText(x)))
    }, Done())

    writeLines = (phrases: string[], timeout = 100, accellerate = false): StateMachine => phrases.map(phrase => this.writeLine(phrase, timeout, accellerate)).reduce((xs, x) => Seq(xs, Seq(this.newLine(), x)), Done())

    writeHtml = (tag: HtmlTag, innerText: string, attr: HtmlAttributes = {}, timeout = 100, accellerate = false): StateMachine => Seq(this.appendText(`<${tag} ${parseAttribute(attr)} >`), Seq(this.writeLine(innerText, timeout, accellerate), this.appendText(`</${tag}>`)))

    mkList = (list_type: 'ol' | 'ul', ...items: string[]): StateMachine => Seq(this.appendText(`<${list_type}>`),
        Seq(items.map(item => this.writeHtml('li', item, {}, 100, true)).reduce((xs, x) => Seq(xs, Seq(Timer(200), x)), Done()),
            this.appendText(`</${list_type}>`)))

    growingSquare = (start_size: number, max_size: number): StateMachine => {
        if (start_size >= max_size) {
            return Done()
        }
        return Seq(this.print(drawSquare(start_size).f('*')), Seq(Timer(200), this.growingSquare(start_size + 1, max_size)))
    }

    shrinkingSquare = (start_size: number): StateMachine => {
        if (start_size <= 0) {
            return Done()
        }
        return Seq(this.print(drawSquare(start_size).f('*')), Seq(Timer(200), this.shrinkingSquare(start_size - 1)))
    }

    flickeringSquare = (size: number, counter: number): StateMachine => {
        if (counter <= 0) {
            return Done()
        }
        return Seq(this.print(drawSquare(size).f("*")), Seq(Seq(Timer(400), this.print(drawHollowSquare(size, '*'))), Seq(Timer(400), this.flickeringSquare(size, counter - 1))))
    }

    growingCircle = (start_size: number, max_size: number): StateMachine => {
        if (start_size > max_size) {
            return Done()
        }
        return Seq(this.print(drawCircle(start_size, '*')), Seq(Timer(200), this.growingCircle(start_size + 1, max_size)))
    }

    shrinkingCircle = (start_size: number): StateMachine => {
        if (start_size <= 1) {
            return Done()
        }
        return Seq(this.print(drawCircle(start_size, '*')), Seq(Timer(200), this.shrinkingCircle(start_size - 1)))
    }

    flickeringCircle = (size: number, counter: number): StateMachine => {
        if (counter <= 0) {
            return Done()
        }
        return Seq(this.print(drawCircle(size, "*")), Seq(Timer(400), Seq(this.print(drawCircle(size, "*", true)), Seq(Timer(400), this.flickeringCircle(size, counter - 1)))))
    }


    code_my_story() {
        this.setState(s => ({ ...s, isRunning: true }))
        let interval_time = 500

        let program: StateMachine = [
            this.clear(),
            this.print("Welcome to my story."),
            this.print("This story is a poem I wrote."),
            this.print("I slowly wrote it in code."),
            this.writeLine("I always try to stay creative."),
            this.askInput("Start the show!", "button"),

            this.clear(),
            this.writeHtml('h2', "Code == Poetry"),

            this.writeLines([
                "So people ask:",
                "How do you do all that coding?",
                "Well...",
                "I'am just fluently following following",
                "the fine flow of my functions",
                "with a fixed format, finding focus",
                "ignoring formalities.",
                "Finally finished fixing factorial faults",
                "before its Friday and catches fire."
            ], 500, true),
            Timer(500),
            this.print("That is my answer."),
            this.writeLine("Give it some thought"),
            Timer(1500),
            this.clear(),

            this.writeHtml('h1', "Tech stack"),
            this.mkList('ul',
                "C#/.NET",
                "Typescript/Javascript",
                "React",
                "Python",
                "no(SQL)",
            ),

            Timer(1500),

            this.writeHtml('h2', "Want to see some fun stuff?"),
            Timer(500),
            this.askInput('Start', 'button'),

            this.clear(),

            this.print("Give me a number:"),
            this.askInput("x", 'number'),
            this.print("And a character:"),
            this.askInput("char", 'string'),
            this.clear(),

            this.printLazy(() => `Drawing shape with size: ${this.getVar('x')} and character: ${this.getVar('char')}`),
            this.printLazy(() => drawSquare(Number(this.getVar('x'))).f(String(this.getVar('char'))[0])),
            Timer(500),
            this.printLazy(() => drawCircle(Number(this.getVar('x')), String(this.getVar('char'))[0])),
            Timer(500),
            this.clear(),
            this.writeLines([
                "Wait a second...",
                "I can make fancy animations with these shapes"
            ], 200, true),
            Timer(500),
            this.clear(),
            Seq(this.growingSquare(1, 10), Seq(this.flickeringSquare(10, 10), this.shrinkingSquare(10))),
            this.clear(),
            Seq(this.growingCircle(4, 20), Seq(this.flickeringCircle(20, 10), this.shrinkingCircle(20))),
            Timer(500),
            this.clear(),

            this.print("Hoped you enjoyed this story in code."),
            this.writeLines([
                "As more code flows",
                "my story will grow.",
            ], 150, true),
            this.writeLines([
                "Curious about my other projects?",
                "Or want to know how I build this site?",
                "Check out my GitHub",
            ], 200, true),
            this.writeHtml('a', 'GitHub', { href: 'https://github.com/Steven24K', target: '_blank' }, 150, true),
            this.print('<h3>Have any questions?</h3>'),
            this.print("<b>Feel free to sent me an email</b>"),
            this.writeHtml('a', 'Mail me', { href: 'mailto:s.koerts2@gmail.com' }, 100, true),

            this.print("-----THE END-----")

        ].reduce((xs, x) => Seq(xs, Seq(Seq(Timer(interval_time), this.newLine()), x)), Done())


        interval = setInterval(() => {
            program.update();
            if (!program.busy) {
                clearInterval(interval);
                this.setState(s => ({ ...s, isRunning: false }))
            }
        }, 10)
    }

    componentDidMount() {
        this.code_my_story()
    }

    componentWillUnmount() {
        clearInterval(interval)
    }

    render() {
        return <>
            <h2>Welome to my personal homepage!</h2>

            <div className="code">
                {this.state.code_story.toIndexedSeq().toArray().map((value, index) => {
                    if (value.kind == 'text') {
                        return <p key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                    }
                    if (value.type == 'string') {
                        let input = this.state.user_input.has(value.name) ? this.state.user_input.get(value.name)! : ''
                        return <input key={index} value={(input.toString())} onChange={e => this.setState(({ ...this.state, user_input: this.state.user_input.set(value.name, e.target.value) }))} />
                    }
                    if (value.type == 'number') {
                        let input = this.state.user_input.has(value.name) ? this.state.user_input.get(value.name)! : ''
                        return <input key={index} value={(input.toString())} type="number" onChange={e => this.setState(({ ...this.state, user_input: this.state.user_input.set(value.name, Number(e.target.value)) }))} />

                    }
                    if (value.type == 'button') {
                        return <button key={index} className={`btn btn-${'success'}`} onClick={() => this.setState(s => ({ ...s, user_input: s.user_input.set(value.name, true) }))}>{value.name}</button>
                    }
                })}
            </div>
        </>
    }
}