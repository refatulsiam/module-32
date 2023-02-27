const users = [
    {id: 1, name: 'Abul', job: 'doctor'}
]

// console.log(users[0].name);

const data = {
    count: 500,
    data: [
        {id: 1, name: 'cabul', job: 'Doctor'},
        {id: 2, name: 'baul', job: 'Nurse'}
    ]
}

const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    addres: {
        street: {
            first: '35/A kochukhet lane',
            second: 'Third floor',
            third: 'right side'
        },
        postOffice: 'cantonment', 
        city: 'Dhaka'
    }
}


const userFloor = user.addres.street?.second;   /* ? optional chaining */

console.log(userFloor);