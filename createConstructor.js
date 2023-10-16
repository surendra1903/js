//creation of constructor
function Person(fname,lname,age){
    this.FirstName=fname;
    this.LastName=lname;
    this.age=age;
    //to add a method in constructor
    this.work=function(){
        console.log("he is don't have any work to do...");
    }
}

//creation of new Object
const myFather=new Person("John", "D", 50);

//to set values for an existing objects
myFather.nationality="Indian";
myFather.nationality;

console.log(myFather);
myFather.work();