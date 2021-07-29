import { Map } from 'immutable'
import * as React from 'react'
import { Call, Seq, Done, Timer, } from './statemachine'


interface CodeStoryState {
    program_counter: number
    code_story: Map<number, string>
}

interface CodeStoryProps {

}

export default class CodeStory extends React.Component<CodeStoryProps, CodeStoryState> {
    constructor(props: CodeStoryProps) {
        super(props)
        this.state = {
            program_counter: 0,
            code_story: Map<number, string>()
        }
    }

    newLine = () => Call(() => this.setState(s => ({ ...s, program_counter: s.program_counter + 1 })))


    print = (v: string) => Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, v) })))

    appendValue = (v: string) => Call(() => this.setState(s => {
        let current = ""
        if (s.code_story.has(s.program_counter)) {
            current = s.code_story.get(s.program_counter)!
        }
        return ({ ...s, code_story: s.code_story.set(s.program_counter, current + v) })
    }))

    resetState = () => Call(() => this.setState({ program_counter: 0, code_story: Map<number, string>() }))

    writeLine = (sentence: string, timeout = 100, accellerate = false) => sentence.split("").reduce((xs, x, i) => {
        return Seq(xs, Seq(Timer(timeout / (accellerate ? i + 1 : 1)), this.appendValue(x)))
    }, Done())

    writeLines = (phrases: string[], timeout = 100, accellerate = false) => phrases.map(phrase => this.writeLine(phrase, timeout, accellerate)).reduce((xs, x) => Seq(xs, Seq(this.newLine(), x)), Done())

    code_my_story() {

        let program = [
            this.writeLines([
                "This is how I started my coding journey",
                "It all started with..."
            ], 200, true),
            this.print("<code>print('Hello World')</code>"), //TODO: Make function to write any html tag inline, with writeLine behavior
            this.writeLines([
                "Yeah how could be different?",
                "Everyone starts like that.",
                "Right?"
            ], 200, true),
            this.writeLine("Have more questions about me?"),
            this.writeLine("Feel free to ask me any question!"),
            this.print("Mail me <a href='mailto:s.koerts2@gmail.com'>here</a>")
            // this.mkList(['item 1', 'item 2', 'item 3']) TODO: Make function to procuce a html list
        ].reduce((xs, x) => Seq(xs, Seq(Seq(Timer(1000), this.newLine()), x)), Done())


        let interval = setInterval(() => {
            program.update();
            if (!program.busy) {
                clearInterval(interval);
            }
        }, 10)
    }

    componentDidMount() {
        this.code_my_story()
    }

    render() {
        return <>
            <h2>My story in code <button className="btn btn-success">Start the show!</button></h2>

            <div className="code">
                {this.state.code_story.toIndexedSeq().toArray().map((value, index0) => {
                    return <p key={index0} dangerouslySetInnerHTML={{ __html: value }} />
                })}
            </div>
        </>
    }
}