const descNum = (num) =>{
    if (typeof(num) === "number"){
        let newNum = String(num).split("")
        newNum = newNum.sort().reverse()
        return newNum.join("")
    }else {
        console.log("Invalid number you entered!!!")
        return false
    }
}
 console.log(descNum(154863179))
 console.log(descNum("ASas"))
 console.log(descNum("ASas989203423"))