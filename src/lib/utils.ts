import { Func } from "./func"

export type HtmlTag = 'a' | 'p' | 'code' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'li'


export const drawLine = (char = '*'): Func<number, string> => Func(n => char)