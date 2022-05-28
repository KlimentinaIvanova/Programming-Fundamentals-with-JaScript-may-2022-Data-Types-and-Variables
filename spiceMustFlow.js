function spiceMustFlow(startYield) {
let daysCounter=0;
let spicesExtracted=0;

while(startYield>=100){
    daysCounter++;
    spicesExtracted+=startYield-26;
    startYield-=10;
}
console.log(daysCounter)
if(daysCounter!==0){
console.log(spicesExtracted-26)
}else{
    console.log(spicesExtracted)
}
}
spiceMustFlow(111)