/* eslint-disable */

import React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript"

import "ace-builds/src-noconflict/theme-monokai";

import "ace-builds/webpack-resolver"
import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/keybinding-vscode"

let code_snippet = `console.clear();

let Fun = (f) => ({
    f: f, 
    then: function (g) {
        return Fun(a => g.f(this.f(a)));
    },
    repeat: function () {
        return Fun(n => repeat(this, n));
    }
});

let Id = () => Fun(x => x);

let repeat = (f, n) => {
    if (n <= 0) {
        return Id();
    } else {
        return f.then(repeat(f, n-1));
    }
};

let incr = Fun(x => x + 1);
//console.log(incr.repeat().f(5).f(1));


let makePair = Fun(fst => Fun(snd => ({first: fst, second: snd})));

let myName = Promise.resolve('Steven');
let currentJob = Promise.resolve(makePair.f('Hoppinger').f('Graduate Intern'));

let languages = Promise.resolve(['C#/.NET', 'Typescript', 'Javascript', 'SQL', 'PHP']);

let tools = Promise.resolve(['VS Code', 'React', 'Visual Studio']);

const interval = 2000;
let iter = 1;

myName.then(name => {
    currentJob.then(job => {
        languages.then(lan => {
            tools.then(t => {
                
                    setTimeout(_ => {
                        console.log('Hello I am ' + name);
                    }, interval * iter);
                    
                    iter += 1;
                   
                    setTimeout(_ => {
                        console.log('I am a ' + job.second);
                    }, interval * iter);
                    
                    iter += 1;
                    
                    setTimeout(_ => {
                        console.log('@ ' + job.first);
                    }, interval * iter);
                    
                    iter += 1;
                    
                    setTimeout(_ => console.log('I program in...'), interval*iter);
                    
                    iter += 1;
                    
                    lan.forEach((value, index) => {
                        setTimeout(_ => {
                            console.log(value);
                        } , interval * iter);
                        iter += 1;
                    });
                    
                    
                    setTimeout(_ => alert('Thanks for visiting my website!!!'), interval*iter);
                    
            
                
            });
        });
    });
});
`



class Playground extends React.Component {
    constructor(props) {
        super(props)
        this.state = { code: code_snippet, output: [] }


        this.Run = this.Run.bind(this)
    }

    Save() {
        localStorage.setItem('code', this.state.code)
    }

    Run() {
        let default_log = console.log
        let default_clear = console.clear
        let default_error = console.error
        let default_warn = console.warn

        console.log = function (...args) {
            // for (let arg of args) {
            //     if (typeof arg == 'object') {
            //         this.setState({ ...this.state, output: this.state.output.concat(JSON.stringify(arg)) })

            //     } else {
            //         this.setState({ ...this.state, output: this.state.output.concat((arg)) })
            //     }
            // }

            this.setState({ ...this.state, output: this.state.output.concat((args.join())) })

            default_log(...args)

        }.bind(this)

        console.clear = function () {
            this.setState({ ...this.state, output: [] })
            default_clear()
        }.bind(this)

        // console.warn = function (w) {
        //     this.setState({ ...this.state, output: this.state.output.concat('Warning: ', w) })
        //     default_warn(w)
        // }

        // console.error = function(e) {
        //     this.setState({ ...this.state, output: this.state.output.concat('Error: ', e) })
        //     default_error()
        // }
    }


    componentWillMount() {
        this.Run()

        let saved_code = localStorage.getItem('code')
        if (saved_code) [
            this.setState({ ...this.state, code: saved_code })
        ]
    }




    render() {
        return <Layout>
            <SEO title="Playground" />

            <div className="container">

                <button onClick={() => {
                    Promise.resolve(this.state.code).then(code => eval(code)).catch(reason => {
                        console.error('Cannot evaluate', reason)
                    })
                }}>
                    Run
                </button>
                
                <button onClick={this.Save()}>
                    Save
                </button>



                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    width='100%'
                    value={this.state.code}
                    onChange={(value) => {
                        this.Save()
                        this.setState({ ...this.state, code: value })
                    }}
                    name="my-playground"
                    enableBasicAutocompletion
                    enableLiveAutocompletion


                    editorProps={{ $blockScrolling: true }}
                />

                <h4>Output:</h4>

                <button onClick={() => this.setState({ ...this.state, output: [] })}>Clear</button>

                <div className='output'>
                    {this.state.output.map((o, i) => <div key={i}> <span className='line-arrow'>></span> {o}</div>)}
                </div>


            </div>

        </Layout>
    }
}



export default Playground

