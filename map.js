const numbers = [2, 8, 4, 6, 3];
const output = [];
for (const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
//console.log(output);
//
function getDoubles(numbers){
    const output = [];
for (const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
return output;
}
const result = getDoubles(numbers);
console.log(result);
//
const fiveTimes = [1, 2, 3, 4, 5].map (x=> x * 5);
console.log(fiveTimes);