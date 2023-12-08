// Use ">" collapse
let input = `\
Time:        44     89     96     91
Distance:   277   1136   1890   1768`
input = input.trim()

const table = input
    .split(/\r?\n/g)
    .map(x => x.split(/:?\s+/g).slice(1).map(Number))
const times = table[0]
const distances = table[1]
const races = times
.map((x, i) => ({ time: times[i], record: distances[i] }))

// console.log(races)
let n = 1;
for (const { time, record } of races) {
    let beat = 0;
    for (let held = 0; held <= time; held++) {
        const t = time - held;
        const v = held;
        const distance = v * t
        if (distance > record) {
            beat++;
        }
    }
    n *= beat;
    // console.log({beat})
}
console.log("solution:", n)

const lines = input.split(/\r?\n/g)
const time = lines[0].replace(/\s+/g, "").split(":")[1]
const record = lines[1].replace(/\s+/g, "").split(":")[1]
console.table({time,record})
let beat = 0
for (let held = 0; held <= time; held++) {
    const t = time - held;
    const v = held
    const distance = v * t;
    if (distance > record) {
        beat++
    }
}
console.log("part 2:", beat)
