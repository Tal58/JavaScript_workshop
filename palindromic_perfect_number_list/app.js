const leftInput = document.querySelector(".left")
const rightInput = document.querySelector(".right")

const perfect = document.querySelector(".Perfect")
const palindrome = document.querySelector(".Palindrome")
const lText = document.querySelector(".Ltextarea")
const rText = document.querySelector(".Rtextarea")

const func_palindrome = () => {
    let left = Number(leftInput.value)
    let right = Number(rightInput.value)
    function plndrm(num) {
        num = String(num)
        let newNum = ""
        for (let i = num.length - 1; i >= 0; i--) {
            newNum += num[i]
        }
        if (newNum == num) {
            return true
        } else { return false }
    }
    if (right > left) {
        for (let i = left; i <= right; i++) {
            if (plndrm(i)) {
                lText.innerHTML += `${i} \n`
            }
        }
    } else {
        for (let i = right; i <= left; i++) {
            if (plndrm(i)) {
                lText.innerHTML += `${i} \n`
            }
        }

    }



}

palindrome.addEventListener("click", func_palindrome)

const func_perfect = () => {
    let left = Number(leftInput.value)
    let right = Number(rightInput.value)
    function prft(num) {
        let total = 0;
        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                total += i
                // console.log(total)
            }
        }
        if (total === num){
            return true
        }else{
            return false
        }
    }
    if (right > left) {
        for (let i = left; i <= right; i++) {
            if (prft(i)) {
                rText.innerHTML += `${i} \n`
            }
        }
    } else {
        for (let i = right; i <= left; i++) {
            if (prft(i)) {
                rText.innerHTML += `${i} \n`
            }
        }

    }
}

perfect.addEventListener("click", func_perfect)