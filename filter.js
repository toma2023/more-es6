const numbers = [12, 5, 23, 11, 18, 9, 55, 61, 1];
const bigNums=numbers.filter(number=>number>20);
const tiny =numbers.filter(number =>number<10);
console.log(tiny);
console.log(bigNums);
const even = numbers.filter(num=>num%2===0);
console.log(even);
const products = [
    {id:1, name:'laptop', price:45000},
    {id:1, name:'mobile', price:80000},
    {id:1, name:'watch', price:35000},
    {id:1, name:'tablet', price:23000},
]
const expensive = products.filter(product=>product.price>100000)
console.log(expensive);