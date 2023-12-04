export default function solution(input) {
  return input.trimEnd()
    .replaceAll(/^.*?(?:(\d).*(\d)|(\d)).*?$|/gm, "$1$2$3$3")
    .split(/\r?\n/g)
    .map(x => parseInt(x))
    .reduce((a, x) => a + x)
}

export function part2(input) {
    input = input.trimEnd()
    const lines = input.split(/\r?\n/g)
    let sum = 0;
    const aliasMap = {
        __proto__: null,
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
        firstDigit = aliasMap[firstDigit] ?? +firstDigit
        let lastDigit = line.match(/.*(one|two|three|four|five|six|seven|eight|nine|\d).*?$/)[1]
        lastDigit = aliasMap[lastDigit] ?? +lastDigit
        const twoDigit = +`${firstDigit}${lastDigit}`
        sum += twoDigit
    }
    return sum
}