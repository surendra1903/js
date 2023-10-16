// let obj={
//     name : 'suri',
//     native : 'AP',
//     graduation : 'Btech',
//     skills : {
//         village : 'k y',
//         present : "chennai"
//     }
// }
// console.log(obj.skills.present);

//using for in loop

let obj={
    name : 'suri',
    native : 'AP',
    graduation : 'Btech',
    skills : {
        village : 'k y',
        present : "chennai"
    }
}
for (let key in obj.skills){
    console.log(key,obj.skills[key]);
}