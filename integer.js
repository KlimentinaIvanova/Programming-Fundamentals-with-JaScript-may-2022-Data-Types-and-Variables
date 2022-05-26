function integer(a,b,c){
let sum=a+b+c
let sumAsString=String(sum)
let type='Integer'
for (let i=0;i<sumAsString.length;i++){
    if(sumAsString[i]=='.'){
type='Float';
    }
}
console.log(`${sum} - ${type}`)
}
integer(1,2,3)