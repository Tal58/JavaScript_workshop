// Asked By:  google
// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there is more than 1 duplicated number, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
// Example
// For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2, so the answer is 3.
// For a = [2, 2], the output should be solution(a) = 2;
// For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1.
function firstDuplicate(str) {
    let newDict = {};
    let newDict1 = {};
    let counter = 0;
    let counter1 = 0;
    let newArr = [];
    for (const x of str) {
        counter = 0;
        for (let i = 0; i < str.length; i++) {
            if (x == str[i]) {counter++}}
        if (newDict.hasOwnProperty(x)) { continue }
        else { newDict[x] = counter; } }
    for (var key in newDict){
        if (newDict[key]>1){
            counter1++}}
    if (counter1 ==0){
        return -1;} 
    for (const [key, value] of Object.entries(newDict)) {
        if (newDict[key] > 1){
            newDict1[key] = str.lastIndexOf(parseInt(key));}} 
    for (var key in newDict1){
        newArr.push(newDict1[key]) }
    newArr.sort();
    for (var key in newDict1){
        if (newDict1[key] == newArr[0]){
            return key}} }

let a= [2, 1, 3, 5, 3, 2]
console.log(firstDuplicate(a))
let b = [2, 2]
console.log(firstDuplicate(b))
let d = [2, 4, 3, 5, 1]
console.log(firstDuplicate(d))

