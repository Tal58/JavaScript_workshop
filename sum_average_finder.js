let sum= 0;
let counter = 0;
let sumAvg = 0;
while (true){
    number= prompt("please enter a number or if you want to quit please enter q/Q");
    if ((number=="q") || (number =="Q")){
        console.log(`counter is ==> ${counter} sum is ==> ${sum} average is ==>> ${sumAvg.toFixed(2)}`)
        break;
    }else if (Number.isInteger(parseInt(number)))
    {sum +=parseInt(number);
     counter++;   
     sumAvg = sum/counter ;}  
     else {
        console.log("you made a mistake. please try again")
     }
    
}