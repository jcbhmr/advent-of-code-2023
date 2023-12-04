export default function solution(input) {
    input = input.trimEnd()
    let sum = 0
    const t = input.split(/\r?\n/g).map(x => [...x])
    for (const [y, row] of t.entries()) {
        let numericSoFar = ""
        let touchesSymbol = false
        for (const [x, cell] of row.entries()) {
            if (!isNaN(cell)) {
                numericSoFar += cell

                if ([[y - 1, x - 1],
                    [y + 0, x - 1],
                    [y + 1, x - 1],
                    
                    [y - 1, x + 0],
                    [y + 1, x + 0],
                    
                    [y - 1, x + 1],
                    [y + 0, x + 1],
                    [y + 1, x + 1]]

                    .map(([y, x]) => t[y]?.[x])
                    .some(v => "~!@#$%^&*()_+-=:;`'\"<>?,/{}|[]\\".includes(v))) {
                    touchesSymbol = true
                }
            } else {
                if (numericSoFar) {
                    const num = parseInt(numericSoFar)
                    if (touchesSymbol) {
                        console.log(`adding ${num} to ${sum} from y=${y} x=${x}`)
                        sum += num
                    } else {
                        console.log(`skipping ${num} since not touching from y=${y} x=${x}`)
                    }
                }
                numericSoFar = ""
                touchesSymbol = false
            }
        }
    }
    return sum
}

export function part2(input) {
}