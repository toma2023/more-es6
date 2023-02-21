// 1.optional chaining
//student.marks?.math
// 1.
/*const numbers = [1, 3, 5, 7, 9];
const output= [];
for(const number of numbers){
    const evenNumber =number+1;
    output.push(evenNumber);
}
//console.log(output);*/
// 2.
/*const numbers = [33, 50, 79, 78, 90, 101, 30];
const divideByTen = numbers.filter(num => num % 10 === 0);
console.log(divideByTen);*/
// 3.
/*const numbers = [33, 50, 79, 78, 90, 101, 30];
const ten =numbers.find(num => num % 10 === 0);
console.log(ten);*/
//practice problem reduce
/*const numbers = [1, 9, 17, 22];
const addAllElements = numbers.reduce((previous, current) =>{
console.log(previous, current);
return previous + current;

} , 0);*/
//
/*const student = {
    name: 'Ftedie',
    age: 26,
}
const age = student.age;
console.log(age);*/
//
/*let data = {
location:[
{
    latitude: '34.5 ,37.8',
longitute: '98.77, 58.7',
city: 'Hyderabad',
country: 'India',
}
]
}
const city =data.location[0].city;
console.log(city);*/
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  const email = user.email;
  const address = user.address;
  const city = user.address.city;
  const lat = user.address.geo.lat;
  const companyName =user.company.name;
  //console.log(email);
  //console.log(address);
 // console.log(city);
  //console.log(lat);
 // console.log(companyName);
 //quiz
 const obj = { foo: 1 };
obj.bar = 2;
//console.log(obj);
function min(nums){ 
    return Math.min(nums) 
  }
 // console.log(min( [1,3,2 ]));
 const cube=x=> x*x*x; 
//console.log(cube(2));
const [a, b] = [1,2,3,4,45,5]; 
//console.log(a+b);
const {x, y, z} = {x: 1, y1: 2, z: 3};
//console.log(x, y, z);
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
//console.log(output);
const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const firstFriend =friends.find(friend =>friend.length ==5);
//console.log(firstFriend);
const product = {
    name: 'Laptop',
     model:'Yoga 3',
      price:49000,
       dusk: '512SSD'
    }
  // const price =product.price; 
  //console.log(price);
  const{price} =product;
  console.log(price);