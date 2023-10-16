let laptop1={
    cpu:'i9',
    ram:15,
    brand:'HP',
    greet:function(){
        console.log(this.cpu);
    }
}

// laptop is -->object
//greet  with in the laptop object is a "method"

/*to call that method with in the object is*/
// laptop.greet();

//to call entities in the object wiht the help of method
let laptop2={
    cpu:'i7',
    ram:15,
    brand:'HP',
    greet:function(){
        console.log(this.cpu);
    }
}
laptop2.greet();