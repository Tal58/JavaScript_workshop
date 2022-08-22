// Check Palindrome
// Given the string, check if it is a palindrome.
// Example
// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] string inputString
// A non-empty string consisting of lowercase characters.
// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 105.
// [output] boolean
// true if inputString is a palindrome, false otherwise.
function isPalindrome(str) {
    if (str.length == 1) {
        return true
    }
    else if (str.length % 2 == 1) {
        if (str.slice(0, (str.length / 2)) === str.slice(((str.length / 2) + 1), (str.length))) {
            return true
        } else {
            return false
        }
    }
    else {
        if (str.slice(0, (str.length / 2)) === str.slice(((str.length / 2)), (str.length))) {
            return true
        } else {
            return false
        }
    }
}
console.log(isPalindrome("aabaa"))
console.log(isPalindrome("abac"))
console.log(isPalindrome("a"))