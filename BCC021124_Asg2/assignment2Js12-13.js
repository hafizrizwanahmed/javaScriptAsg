// 1) Write a program that takes a character (number or string)in a variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var input1 = prompt("Please enter any number or character");
if(input1 > -1000000000 && input1 < 1000000000){
    alert("Input is a number")
}else if(input1.charCodeAt(0) >= 65 && input1.charCodeAt(0) <=90){
    alert("Upper case");
}else if(input1.charCodeAt(0) >= 97 && input1.charCodeAt(0) <=122){
    alert("Lower case");
    }

// 2) Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var integer1 = prompt("Please enter 1st Integer");
var integer2 = prompt("Please enter 2nd Integer");
if(integer1 > integer2){
    alert("integer1 : " + integer1 +" is greater than integer2 : " + integer2);
}else if(integer1 < integer2){
        alert("integer1 : " + integer1 +" is less than integer2 : " + integer2);
}else if(integer1 == integer2){
        alert("integer1 : " + integer1 +" and integer2 : " + integer2 + " are equal");
}

// 3) Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var integer = prompt("Please enter any Integer");
if(integer > 0){
    alert("integer1 : " + integer +" is Positive");
}else if(integer < 0){
    alert("integer : " + integer +" is Negative");
}else if(integer == 0){
    alert("integer : " + integer +" is zero");
}


// 4) Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var character = prompt("Please enter any character");
if(character =="A" || character =="E" || character =="I" || character =="O" || character =="U"|| 
character =="a" || character =="e" || character =="i" || character =="o" || character =="u"){
    alert("True");
}else{
    alert(false);
    }

//5) Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then give message “ Please enter your password”
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show
//“Incorrect password” otherwise.

var correctPassword = "Rizwan";
var password = prompt("Enter your password");
if(password == ""){
    alert("Please enter your password");
}else if(password == correctPassword){
        alert("Correct! The password you entered matches the original password");
}else if(password !== correctPassword){
        alert("Incorrect password");
}

//6) This if/else statement does not work. Try to fix it:
//var greeting;
//var hour = 13;
//if (hour < 18) {
//greeting = "Good day";
//else
//greeting = "Good evening";
//}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}else{
greeting = "Good evening";
alert(greeting);
}

// 7) Write a program that takes time as input from user in 24hours clock format like: 1900 = 7pm. Implement the
//following case using if, else & else if statements

var time = prompt("Enter time");
if(time >= 0000 && time < 1200){
    alert("Good morning");
}else if(time >= 1200 && time < 1700){
        alert("Good afternoon");
}else if(time >= 1700 && time < 2100){
        alert("Good evening")
}else if(time >= 2100 && time < 2359){
        alert("Good night");
}else{
    alert("Wrong input");
        }

