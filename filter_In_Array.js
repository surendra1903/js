let nums=[1,2,3,4,5,6,7,8,9]
//1. first we are filtering the values in array using filter() method
//2. we are iterating the loop using for-each method in that filter method like the below
nums.filter(n => n%2 === 1).forEach(n => {console.log(n*2);})