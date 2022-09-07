const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

const combine = (...args) =>{
    let dict = {};
    for (const x of args){
        for (const [key, value] of Object.entries(x)) {
            if (dict[key] == undefined){
                dict[key] = value;
            }
            else {
                dict[key] += value
            }
                 
  }
    }console.log(dict)
}
combine(objA, objB, objC, objD)