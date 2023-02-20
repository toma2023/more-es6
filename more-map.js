const numbers = [12, 56, 87, 44];
const half = numbers.map(n=>n/2);
console.log(half);
const thirds = numbers.map(x => x/3);
console.log(thirds);
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters =friends.map(friend=>friend[0]);
console.log(firstLetters);
const nameLengths = friends.map(friend=>friend.length);
console.log(nameLengths);
//Array of object
const products = [
    {id:1, name:'laptop', price:45000},
    {id:1, name:'mobile', price:80000},
    {id:1, name:'watch', price:35000},
    {id:1, name:'tablet', price:23000},
]
const items = products.map(product=>console.log(product));
const prices = products.map(p=>p.price);
console.log(prices);