// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

// Examples:

// groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// // returns 'Carrots, Hummus, Pesto and Rigatoni'
 
// groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// // returns 'Bread and Butter'
 
// groceries( [{item: 'Cheese Balls'}] );
// // returns 'Cheese Balls'

const groceries = (arr) => {
    let str = ""
    if (arr.length ==1){
      return `${arr[0].item}`
    }
    for (let i = 0; i < arr.length; i++){        
      if (i==(arr.length-1)){
        str += `and ${arr[i].item}`
      }else if(i==(arr.length-2))
      {str += `${arr[i].item} ` }
        else{
        str += `${arr[i].item}, `
      }    
      
    }
    return str
  }


  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
// returns 'Bread and Butter'
 

console.log(groceries( [{item: 'Cheese Balls'}] ));
// returns 'Cheese Balls'