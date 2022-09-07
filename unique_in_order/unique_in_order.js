let c = 'AAAABBBCCDAABBB'
let b =  'ABBCcAD'        
let a = [1,2,2,3,3,3]     
const uniqueInOrder = (arr) =>{
    let newArr = [];
    for (let i=0; i<arr.length; i++){
        if ((newArr.length == 0) || (arr[i] != newArr[newArr.length-1])){
            newArr.push(arr[i])
        }else{
            continue
        }
    }
    console.log(newArr)
}

uniqueInOrder('AAAABBBCCDAABBB') 
uniqueInOrder('ABBCcAD')        
uniqueInOrder([1,2,2,3,3,3])    