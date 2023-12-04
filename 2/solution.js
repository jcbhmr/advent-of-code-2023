export default function solution(input) {
    input = input.trimEnd()
    const lines = input.split(/\r?\n/g)
    let sum = 0
    for (const line of lines) {
        const gameNumber = +line.match(/^Game (\d+):/)[1]
        const shows = line.split(": ")[1].split("; ")
        let valid = true
        for (const show of shows) {
            for (const seen of show.split(", ")) {
                const pair = seen.split(" ")
                const count = +pair[0]
                const color = pair[1]
                if (color === "red" && count > 12) {
                    valid = false
                } else if (color === "green" && count > 13) {
                    valid = false
                } else if (color === "blue" && count > 14) {
                    valid = false
                }
            }
        }
        if (valid) {
            sum += gameNumber
        }
    }
    return sum
}

export function part2(input) {
    input = input.trimEnd()
    const lines = input.split(/\r?\n/g)
    let sum = 0
    for (const line of lines) {
        const gameNumber = +line.match(/^Game (\d+):/)[1]
        const shows = line.split(": ")[1].split("; ")
        let valid = true
        let minRed = 0
        let minGreen = 0
        let minBlue = 0
        for (const show of shows) {
            for (const seen of show.split(", ")) {
                const pair = seen.split(" ")
                const count = +pair[0]
                const color = pair[1]
                if (color === "red" && count > 12) {
                    valid = false
                } else if (color === "green" && count > 13) {
                    valid = false
                } else if (color === "blue" && count > 14) {
                    valid = false
                }

                if (color === "red") {
                    minRed = Math.max(minRed, count)
                } else if (color === "green") {
                    minGreen = Math.max(minGreen, count)
                } else if (color === "blue") {
                    minBlue = Math.max(minBlue, count)
                }
            }
        }
        const power = minRed * minGreen * minBlue
        sum += power
    }
    return sum
}