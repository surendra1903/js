function fact(n){
    if(n===0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}
let num=5;
let res=fact(num);
console.log(res);