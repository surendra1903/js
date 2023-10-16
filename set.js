// let letter= new Set(['a','b'])
// letter.add(3);
// letter.add(4);
// letter.add(3);
// letter.add('suri');
// letter.add("hello");

// console.log(letter);
// letter.forEach(n=>{
//     console.log(n);
// })

const letter=new Set(['a','b','c'])
let text=""
const ltr=letter.entries();
for(const entry of ltr){
    console.log(entry);
}
// console.log(text);