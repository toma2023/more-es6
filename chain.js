const users = [
    {id: 10, name : 'abul', job: 'doctor'}
]
//console.log(users[0].id);
const data = {
    count: 5000,
    data: [
        {id:1, name:'babul', job:'developer'},
        {id:1, name:'abul', job:'leader'}
    ]
}
const firstJob = data.data[0].job;
console.log(firstJob);
//
const user = {
    id:5001,
    name:'Thomas alva edison',
    address:{
        street:{
            first:'35/A kochukhet lane',
            second:'third floor',
            third:'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}
const userFloor = user.address.street.second;
console.log(userFloor);
