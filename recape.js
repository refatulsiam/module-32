// default parameters

function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// Template string

const elementHtml = `
<div>
    <h3>Name: </h3>
    <p> Others: ${Number[2]}</p>
</div>
`

// arrow function


const doubleIt = x => x*2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary* tax* + bonus;


//  spread

const ages = [11,18,16,17,21];
const newAges = [...ages, 22, 27];

// destructuring

const {x,y, ...c} = {x:45 , y:12, z:33, name: 'Shakib', salary};


const [] = [12,45,68,74,56];