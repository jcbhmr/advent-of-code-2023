export default (input) => {
    input = input.trimEnd()
    const lines = input.split(/\r?\n/g)
    let sum = 0;
    for (const line of lines) {
        let firstDigit = line.match(/^.*?(\d)/)[1]
        let lastDigit = line.match(/(\d).*?$/)[1]
        console.log(line, firstDigit, lastDigit)
        const twoDigit = +`${firstDigit}${lastDigit}`
        sum += twoDigit
    }
    return sum
}

export function part2(input) {
    input = input.trimEnd()
    const lines = input.split(/\r?\n/g)
    let sum = 0;
    const alias = {
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9"
    }
    for (const line of lines) {
        let firstDigit = line.match(/^.*?(one|two|three|four|five|six|seven|eight|nine|\d)/)[1]
        firstDigit = alias[firstDigit] ?? +firstDigit
        let lastDigit = line.match(/(one|two|three|four|five|six|seven|eight|nine|\d).*?$/)[1]
        lastDigit = alias[lastDigit] ?? +lastDigit
        const twoDigit = +`${firstDigit}${lastDigit}`
        sum += twoDigit
    }
    return sum
}