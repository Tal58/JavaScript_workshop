## TR Identity Number Validation

Purpose of the this coding challenge is to write a code that given TR Identity Number, returns valid or invalid.

## Learning Outcomes

Aim of this challenge is as follows;

 -analyze a problem, identify and apply programming knowledge for appropriate solution.<br>
 -demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.<br>
 
# Problem Statement
Valid TR Identity Number must follow these rules: <br>
1. TR Identity Number actually consists of 9 digits, the last 2 digits have been added for control/verification purposes.<br>
2. The ID number cannot start with 0.<br>
3. The 10th digit is obtained by using the first 9 digits, and the 11th digit is obtained by using the first 10 digits.<br>
4. Add the digits in the 1st, 3rd, 5th, 7th and 9th digits, multiply by 7 and subtract the sum of the digits in the 2nd, 4th, 6th and 8th digits. <br>
5. The units digit of the result obtained (mod 10) gives the 10th digit of the ID number. <br>
6. When we add the first 9 digits of the ID number and the 10th digit obtained by the above method, the ones digit (mod 10) gives the 11th digit. <br>

<br>
Expected Outcome
<br>
Valid TR Identity Numbers for checking <br>
Here are randomly generated valid ID numbers. You can use them to test your code.<br>
34444185856<br>
10880383988<br>
14702551364<br>
90091059698<br>
32413045316<br>
12835718432<br>
53963153566<br>
11111111110<br>
<center> ⌛ Happy Coding  ✍ </center>

## 🖥️Screen version
<br>
<img src="./password.png" align="left" alt="desktop_version">


