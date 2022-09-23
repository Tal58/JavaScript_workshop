let list = ["{}","[]","()"]

function bracket_validator(input){
    input = input.replace(/ /g, "") //to check whether input has a space between brackets
if (input.length%2 ==0){
    for (i=0; i<3; i++){    //three times check bracket
        for(const x of list){//control brackets if it has replace it with ""
        input = input.replace(x,"")
    }}
    if (input.length>0){//if input covers all requirements it must be empty and returns true otherwise it returns false
        return false
    }else{
        return true
    }

}else{
    return false
}}

console.log(bracket_validator("{ [ ] ( ) }"))
console.log(bracket_validator("{ [ ( ] ) }"))
console.log(bracket_validator("{ [ }"))


