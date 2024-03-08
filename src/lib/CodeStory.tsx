import { Map } from 'immutable'
import * as React from 'react'
import { Call, Seq, Done, Timer, StateMachine, Wait, } from './statemachine'
import { drawCircle, drawHollowSquare, drawSquare, HtmlAttributes, HtmlTag, InputType, parseAttribute } from './utils'


type Text = { kind: 'text', text: string }
type Input = { kind: 'input', name: string, type: InputType }
type ReactContent = { kind: 'react', jsx: React.ReactNode }

type CodeStack = Text | Input | ReactContent

const mkText = (v: string): Text => ({ kind: 'text', text: v })
const mkInput = (name: string, type: InputType): Input => ({ kind: 'input', name: name, type: type })
const mkReact = (jsx: React.ReactNode): ReactContent => ({ kind: 'react', jsx: jsx })

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

    writeLine = (sentence: string, timeout = 10, accellerate = false): StateMachine => sentence.split("").reduce((xs, x, i) => {
        return Seq(xs, Seq(Timer(timeout / (accellerate ? i + 1 : 1)), this.appendText(x)))
    }, Done())

    writeLines = (phrases: string[], timeout = 10, accellerate = false): StateMachine => phrases.map(phrase => this.writeLine(phrase, timeout, accellerate)).reduce((xs, x) => Seq(xs, Seq(this.newLine(), x)), Done())

    writeHtml = (tag: HtmlTag, innerText: string, attr: HtmlAttributes = {}, timeout = 10, accellerate = false): StateMachine => Seq(this.appendText(`<${tag} ${parseAttribute(attr)} >`), Seq(this.writeLine(innerText, timeout, accellerate), this.appendText(`</${tag}>`)))

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

    renderReact = (jsx: React.ReactNode): StateMachine => {
        return Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(s.program_counter, mkReact(jsx)) })))
    }

    code_my_story() {
        this.setState(s => ({ ...s, isRunning: true }))
        let interval_time = 500

        let year_graduated = 2020
        let years_of_experience = new Date().getUTCFullYear() - year_graduated

        let program: StateMachine = [
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

            this.renderReact(<div>
                <img style={{ maxWidth: '300px', width: '40%', display: 'inline-block' }} width={'auto'} alt="profile-steven-koerts" src="./images/StevenKoerts1.JPG" />
                <img style={{ maxWidth: '300px', width: '40%', display: 'inline-block' }} width={'auto'} alt="profile-steven-koerts" src="./images/StevenKoerts2.JPG" />
            </div>),



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
        return <div className='code'>
            {this.state.code_story.toIndexedSeq().toArray().map((value, index) => {
                if (value.kind == 'text') {
                    return <p key={index} dangerouslySetInnerHTML={{ __html: value.text }} />
                }
                if (value.kind == 'react') {
                    return value.jsx
                }
                if (value.type == 'string') {
                    let input = this.state.user_input.has(value.name) ? this.state.user_input.get(value.name)! : ''
                    return <input key={index} maxLength={1} autoFocus value={(input.toString())} onChange={e => this.setState(({ ...this.state, user_input: this.state.user_input.set(value.name, e.target.value) }))} />
                }
                if (value.type == 'number') {
                    let input = this.state.user_input.has(value.name) ? this.state.user_input.get(value.name)! : ''
                    return <input key={index} value={(input.toString())} autoFocus type="number" onChange={e => this.setState(({ ...this.state, user_input: this.state.user_input.set(value.name, Number(e.target.value)) }))} />

                }
                if (value.type == 'button') {
                    return <div>
                        <button key={index} className={`btn btn-${'success'}`} onClick={() => this.setState(s => ({ ...s, user_input: s.user_input.set(value.name, true) }))}>{value.name}</button>
                    </div>
                }
            })}
        </div>
    }
}