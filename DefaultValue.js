// function add(n1,n2,n3){ //we are not taking any default value
//     console.log(n1,n2,n3);
//     return n1+n2+n3;
// }
// console.log(add(2,3));

function add(n1,n2,n3=1){ // here we are taking "n3=1" default value
    console.log(n1,n2,n3);
    return n1+n2+n3;
}
console.log(add(2,3));  