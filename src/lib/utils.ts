import { Func } from "./func"

export type HtmlTag = 'a' | 'p' | 'code' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'li' | 'b' | 'i' | 'img'

export type HtmlAttributes = {
    href?: string 
    target?: '_blank' | '_self'
    src?: string
}

export const parseAttribute = (attrs: HtmlAttributes): string => Object.entries(attrs).reduce((xs, x) => xs + x[0] + '=' + x[1] + ' ' , '')

export type BootstrapButtonStyle =  'success' | 'primary' | 'danger' | 'warning' | 'link'

export type InputType = 'string' | 'number' | 'button'

export let drawLine = (n: number): Func<string, string> => Func(char => {
    if (n <= 0) {
        return ""
    }
    return char + drawLine(n - 1).f(char)
})

export let drawSquare = (n: number): Func<string, string> => drawLine(n).then(Func(line => line + "<br>")).repeat().f(2)

export let drawTriangle = (n: number): Func<string, string> => Func(char => Array(n).fill(0).map((_, i) => drawLine(i + 1).f(char)).reduce((xs, x) => xs + x + "<br>", ""))

export let drawTriangle_reversed = (n: number): Func<string, string> => Func(char => Array(n).fill(0).map((_, i) => drawLine(n - i).f(char)).reduce((xs, x) => xs + x + "<br>", ""))

export let drawHollowSquare = (n: number, char: string): string => {
    let res = ""
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if (y == 0 || y == n - 1 || x == 0 || x == n - 1) {
                res += char
            } else {
                res += " "
            }
        }
        res += "<br>"
    }
    return res
}

export let drawCircle = (diameter: number, char: string, hollow = false): string => {
    let center_x = diameter / 2
    let center_y = diameter / 2
    let circle = ""

    for (let y = 0; y <= diameter + 1; y++) {
        for (let x = 0; x <= diameter + 1; x++) {
            let distance = Math.ceil(Math.sqrt((center_x - x) ** 2 + (center_y - y) ** 2))
            if (((distance <= diameter / 2) && !hollow) || ((distance == Math.floor(diameter / 2)) && hollow) ) {
                circle += char
            } else {
                circle += " "
            }
        }
        circle += "<br>"
    }
    return circle
}