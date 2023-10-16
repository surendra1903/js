/*normal function*/

let add1 = function(n1,n2){
    return n1+n2;
}
let result1=add1(2,4);
console.log(result1);

//output-->2+4=6

/* Arrow function without parameters*/

let add2= () =>  "hello";
let result2=add2();
console.log(result2);

/* Arrow function with parameters */
let add = (n1,n2) => n1+n2;
console.log(add(2,4));