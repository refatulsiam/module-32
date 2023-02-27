const numbers = [41,14,25,78,20,16,11,19,45];
const bigNums = numbers.filter(number => number >20);
const smallNums = numbers.filter(number => number <20);
const even = numbers.filter(number => number %2 ==0);
console.log(bigNums);
console.log(smallNums);
console.log(even);


const products = [
    {id:1, name: 'laptop', price: 450000},
    {id:1, name: 'mobile', price: 80000},
    {id:1, name: 'watch', price: 35000},
    {id:1, name: 'tablet', price: 20000},
];