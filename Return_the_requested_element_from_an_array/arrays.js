

let Input1 = [[10,50,61,17,82,95,9,11,12,13],1];
let Input2 = [[10,50,61,17,82,95,9,11,12,13],2];
let Input3 = [[10,50,61,17,82,95,9,11,12,13],3];
let Input4 = [[10,50,61,17,82,95,9,11,12,13],4];
let Input5 = [[10,50,61,17,82,95,9,11,12,13],5];
let Input6 = [[10,50],4];
let read = {
    1 : "st",
    2 : "nd",
    3 : "rd",
    4 : "th"
}

const small = (arr) => {
    let newArr = arr[0].sort(function (a,b){ return a-b; });
    if (newArr.length > arr[1]){
        if (arr[1] < 4){
            return console.log(`${newArr[arr[1]-1]} (${arr[1]}${read[arr[1]]} smallest element)`)
        }
        else {
            return console.log(`${newArr[arr[1]-1]} (${arr[1]}${read[4]} smallest element)`)
        }
       
    }
    else {
        console.log("Out of range")
    }}
    

small(Input1)
small(Input2)
small(Input3)
small(Input4)
small(Input5)
small(Input6)

