import { Map } from 'immutable'
import * as React from 'react'
import { Call, Seq, Done, Timer, StateMachine, } from './statemachine'
import { drawCircle, drawHollowSquare, drawLine, drawSquare, HtmlTag } from './utils'


interface CodeStoryState {
    program_counter: number
    code_story: Map<number, string>
    isRunning: boolean
}

interface CodeStoryProps {

}

let interval: any
export default class CodeStory extends React.Component<CodeStoryProps, CodeStoryState> {
    constructor(props: CodeStoryProps) {
        super(props)
        this.state = {
            program_counter: 0,
            code_story: Map<number, string>(),
            isRunning: false
        }

        this.code_my_story = this.code_my_story.bind(this)
    }

    newLine = (): StateMachine => Call(() => this.setState(s => ({ ...s, program_counter: s.program_counter + 1 })))


    print = (v: string): StateMachine => Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, v) })))

    appendValue = (v: string): StateMachine => Call(() => this.setState(s => {
        let current = ""
        if (s.code_story.has(s.program_counter)) {
            current = s.code_story.get(s.program_counter)!
        }
        return ({ ...s, code_story: s.code_story.set(s.program_counter, current + v) })
    }))

    clear = (): StateMachine => Call(() => this.setState({ program_counter: 0, code_story: Map<number, string>() }))

    writeLine = (sentence: string, timeout = 100, accellerate = false): StateMachine => sentence.split("").reduce((xs, x, i) => {
        return Seq(xs, Seq(Timer(timeout / (accellerate ? i + 1 : 1)), this.appendValue(x)))
    }, Done())

    writeLines = (phrases: string[], timeout = 100, accellerate = false): StateMachine => phrases.map(phrase => this.writeLine(phrase, timeout, accellerate)).reduce((xs, x) => Seq(xs, Seq(this.newLine(), x)), Done())

    writeHtml = (tag: HtmlTag, innerText: string, timeout = 100, accellerate = false): StateMachine => Seq(this.appendValue(`<${tag}>`), Seq(this.writeLine(innerText, timeout, accellerate), this.appendValue(`</${tag}>`)))

    mkList = (list_type: 'ol' | 'ul', ...items: string[]): StateMachine => Seq(this.appendValue(`<${list_type}>`),
        Seq(items.map(item => this.writeHtml('li', item, 100, true)).reduce((xs, x) => Seq(xs, Seq(Timer(200), x)), Done()),
            this.appendValue(`</${list_type}>`)))

    growingSquare = (start_size: number, max_size: number): StateMachine => {
        if (start_size >= max_size) {
            return Done()
        }
        return Seq(this.print(drawSquare(start_size).f('*')), Seq(Timer(400), this.growingSquare(start_size + 1, max_size)))
    }

    flickeringSquare = (size: number, counter: number): StateMachine => {
        if (counter <= 0) {
            return Done()
        }
        return Seq(this.print(drawSquare(size).f("*")), Seq(Seq(Timer(400), this.print(drawHollowSquare(size, '*'))), Seq(Timer(400), this.flickeringSquare(size, counter - 1))))
    }

    code_my_story() {
        this.setState(s => ({ ...s, isRunning: true }))

        let program: StateMachine = [
            this.clear(),
            this.writeLine(drawCircle(30, '#'), 100, true),
            this.growingSquare(1, 10),
            this.clear(),
            this.flickeringSquare(10, 5),
            this.clear(), 

            this.writeLines([
                "This is how I started my coding journey",
                "It all started with..."
            ], 200, true),
            this.writeHtml('code', 'print("Hello World!!!")'),
            this.writeLines([
                "Yeah how could be different?",
                "Everyone starts like that.",
                "Right?",
                "I also learned other things",
                "Like drawing lines",
            ], 200, true),
            this.clear(),
            this.writeLine(drawLine(10).f('*')),
            this.clear(),
            this.writeLines([
                "Or repeat that to make a square: ",
                drawSquare(10).f("*"),
            ], 100, true),


            this.mkList('ol', "Item 1", "Item 2", "Item 3"),
            this.writeLine("Have more questions about me?"),
            this.writeLine("Feel free to ask me any question!"),
            this.print("Mail me <a href='mailto:s.koerts2@gmail.com'>here</a>"),
        ].reduce((xs, x) => Seq(xs, Seq(Seq(Timer(1000), this.newLine()), x)), Done())


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
            <h2>My story in code <button disabled={this.state.isRunning} className="btn btn-success" onClick={this.code_my_story}>Start the show!</button></h2>

            <div className="code">
                {this.state.code_story.toIndexedSeq().toArray().map((value, index0) => {
                    return <p key={index0} dangerouslySetInnerHTML={{ __html: value }} />
                })}
            </div>
        </>
    }
}