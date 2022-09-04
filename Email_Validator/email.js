//Email Validator
let availablelist = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";
let regex = /^@/
let regex2 = /@/g
let regex3 = /[a-z0-9_+.@]/gi

const emailController = (email) => {
    if (email.match(regex3).length == email.length) {      //all elements must be get inside
        if (!(regex.test(email))) {                         // to check @ is first character or not
            if (!(email.match(regex2).length > 1)) {        // to check more than one @ character
                if (email.length - email.lastIndexOf(".") >= 3) {   // to check at least two character after the . sign
                    if ((email.lastIndexOf(".") - email.lastIndexOf("@") > 0)) {    //to check . sign after @
                        console.log("valid e-mail")
                        return true
                    } else {
                        console.log("invalid e-mail")
                        return false
                    }
                }
                else {
                    console.log("invalid e-mail")
                    return false
                }
            }
            else {
                console.log("invalid e-mail")
                return false
            }
        } else {
            console.log("invalid e-mail")
            return false
        }}
    else {
        console.log("invalid e-mail")
        return false
    }
}


console.log(emailController("name.last_Name@company.com"))
console.log(emailController("name.143@company.co"))
console.log(emailController("name.last-Name@company.com"))
console.log(emailController("name.last_Name@company.c"))
console.log(emailController("name.last_Name@company"))
