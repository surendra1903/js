let laptop={
    cpu:'i4',
    ram:6,
    brand:'HP',
    compare:(other) =>{
        if(this.cpu>other.cpu){
            console.log(this);
        }else{
            console.log(other);
        }
    }
}
let laptop2={
    cpu:'i6',
    ram:6,
    brand:'lenovo'
}

laptop.compare(laptop2);
