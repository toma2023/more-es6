const numbers = [1, 2, 3, 4, 5];
//const total = numbers.reduce((previous, current) =>previous + current, 0);
//console.log(total);
//multiline
const total = numbers.reduce( (previous, current) => {
    console.log(previous, current);
    return previous + current
    } , 0);
    console.log(total);