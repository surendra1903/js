//method 1
let one=[11,2,3,4,5]
one.filter(n => n%2 === 0)
.map(n=> n*2)
.forEach(n => {
    console.log(n);
});

//method 2
let two=[4,5,6,77]
const newarr=two.map(Math.sqrt)
console.log(newarr);

//method 3
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  console.log(persons.map(getFullName))
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

  //method 4
let nums=[1,2,3,4,5,6]
function xyz(n){
   return n*2
}
const newfun=nums.map(xyz)
console.log(newfun);