function game(){
let randomNumber = Math.round(Math.random()*100);
let counter =5;

for (let i =1; i<=counter; i++){
    number = +prompt("enter a number between 0-100");
    if (number==randomNumber){
        console.log(`You won the number is ${number}`)
        break;
    }else if (number > randomNumber){
        console.log(number)
        console.log("please decrease the number")
    }else {
        console.log(number)
        console.log("please increase the number")
    }
    if (i == 5){
        console.log("unfortunately you lost!!")
    }
}}
game();

while (true){
    let check = prompt("would you like to play again?")
    if (check == "yes"){
        game();
    } else if (check =="no"){
        break;
    }else{
        console.log("You made a mistake. Please try again")
    }
}
