const numbers = [2,8,4,6,3];




function getDouble(numbers){
    const output = [];

    for (const Number of numbers){
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleIt(number){
    return number * 2;
}

const result = getDouble(numbers);
// console.log(result);



/*
purpose: 
1.get an array 
2. for every element of the array do something
3. store the result in an array
4. return the result array
*/

const makeDouble = numbers.map(doubleIt);

// console.log(makeDouble);

const fiveTimes = [1,2,3,4,5].map(x => x *5);
console.log(fiveTimes);