let num=54534;
let ans=0;
while(num>0){
    ans=(ans*10)+num%10;
    num=parseInt(num/10);
}
console.log(ans);
