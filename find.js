const numbers = [41,14,25,78,20,16,11,19,45];

const products = [
    {id:1, name: 'laptop', price: 450000},
    {id:1, name: 'mobile', price: 80000},
    {id:1, name: 'watch', price: 35000},
    {id:1, name: 'tablet', price: 20000},
];

const fives = numbers.find(num => num % 5 === 0);
console.log(fives);