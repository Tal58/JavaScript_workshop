const slidingWindow = (arr, k) =>{
    let slidingArr = []
    for (let i =0; i<=arr.length-k; i++){
        let newArr = arr.slice(i,k+i)
        newArr = newArr.sort((a,b)=>{
            return a==b ? 0 : a>b ?1: -1
        })
        slidingArr.push(newArr[k-1])
    }
 
  return slidingArr
}
const k = 3
const array = [10, 5, 2, 7, 8, 7]
const array1 = [1,3,-1,-3,5,3,6,7]


console.log(slidingWindow(array,k))
console.log(slidingWindow(array1,k))