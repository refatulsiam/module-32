const numbers = [12, 56, 87, 44];
const half = numbers.map( n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);


const friends = ['tom', 'jerry', 'mices'];

const firstLetter = friends.map(friend => friend[0]);

const nameLength = friends.map( friend => friend.length);

const products = [
    {id:1, name: 'laptop', price: 450000},
    {id:1, name: 'mobile', price: 80000},
    {id:1, name: 'watch', price: 35000},
    {id:1, name: 'tablet', price: 20000},
];

const items = products.map(product => product.name);
const price = products.map(p => p.price);
console.log(price);