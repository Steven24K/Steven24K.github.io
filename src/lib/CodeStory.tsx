import { Map } from 'immutable'
import * as React from 'react'
import { Call, Seq, Done, Timer, StateMachine, Wait, } from './statemachine'
import { BootstrapButtonStyle, drawCircle, drawHollowSquare, drawLine, drawSquare, HtmlTag, InputType } from './utils'


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
        this.getVar = this.getVar.bind(this)
        // TODO: bind all functions
    }

    newLine = (): StateMachine => Call(() => this.setState(s => ({ ...s, program_counter: s.program_counter + 1 })))


    print = (v: string): StateMachine => Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, mkText(v)) })))

    askInput = (input_name: string, type: InputType): StateMachine => Seq(Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, mkInput(input_name, type)) }))), Wait(() => this.state.user_input.has(input_name)))

    getVar = (name: string): (string | number | boolean) => this.state.user_input.has(name) ? this.state.user_input.get(name)! : false


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

    writeHtml = (tag: HtmlTag, innerText: string, timeout = 100, accellerate = false): StateMachine => Seq(this.appendText(`<${tag}>`), Seq(this.writeLine(innerText, timeout, accellerate), this.appendText(`</${tag}>`)))

    mkList = (list_type: 'ol' | 'ul', ...items: string[]): StateMachine => Seq(this.appendText(`<${list_type}>`),
        Seq(items.map(item => this.writeHtml('li', item, 100, true)).reduce((xs, x) => Seq(xs, Seq(Timer(200), x)), Done()),
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



    code_my_story() {
        this.setState(s => ({ ...s, isRunning: true }))

        let program: StateMachine = [
            this.askInput('hello', 'string'),
            Timer(1000),
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
            Timer(500),
            this.clear(),
            this.writeLines([
                "Later I learned drawing shapes on the command line",
                "Like these:"
            ], 200, true),
            this.print(drawSquare(5).f("*")),
            this.print("or"),
            this.print(drawCircle(6, "*")),
            this.print("and"),
            this.print(drawHollowSquare(5, "*")),
            this.writeLines([
                "I can make any size",
                "with any character"
            ]),
            Timer(500),
            this.clear(),
            this.print("Give me a number"),
            this.askInput("x", 'number'),
            this.print("Now give 1 character or symbol"),
            this.askInput("char", 'string'),
            this.clear(),
            this.print(`Drawing with size: ${this.getVar('x')} and char: ${this.getVar('char')}`),
            this.print(drawSquare(Number(this.getVar('x'))).f(String(this.getVar('char'))[0])),
            this.print(drawCircle(Number(this.getVar('x')), String(this.getVar('char'))[0])),
            this.writeLines([
                "Wait a second...",
                "I can make fancy animations with these"
            ], 200, true),
            this.clear(),
            // TODO: Start growing and shrinking animations

        ].reduce((xs, x) => Seq(xs, Seq(Seq(Timer(700), this.newLine()), x)), Done())


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
            <h2>My story in code
                {/* <button disabled={this.state.isRunning} className="btn btn-success" onClick={this.code_my_story}>Start the show!</button> */}
            </h2>

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