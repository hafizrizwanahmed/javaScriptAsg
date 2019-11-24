    // 1) Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user 
    //like this: “Welcome to city of lights”

    var city = prompt("Enter city name");
    if (city == "Karachi"){
        alert("Welcome to city of lights");
    }else {
        alert("Wrong city");
    }

        //2) Write a program to take “gender” as input from user. If the user is male, give the 
        //message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

 var gender = prompt("Enter your gender");
    if (gender == "Male") {
        alert("Good Morning Sir.");
    } else if (gender == "Female"){
        alert("Good Morning Ma’am.");
    } else{
        alert("Wrong gender input");
    }

    // 3) Write a program to take input color of road traffic signal from the user & show the 
    //message according to this table:

    var signal = prompt("Enter Signal Status");
    if (signal == "Red") {
        alert("Must Stop.");
    } else if (signal == "Yellow"){
        alert("Ready to move.");
    } else if (signal == "Green"){
        alert("Move now.");
    }else{
        alert("Wrong input");
    }


    // 4) Write a program to take input remaining fuel in car (in litres) from user. If the current fuel 
    //is less than 0.25litres, show the message “Please refill the fuel in your car”

    var fuelStatus = prompt("Enter Remaining Fuel");
    if (fuelStatus <= 0.25) {
        alert("Please refill the fuel in your car");
    }else{
        alert("You have enough fuel.");
    }

    // 5) Run this script, & check whether alert message would be displayed or not. Record the outputs.
    var a = 4;
if (++a === 5){
  alert("given condition for variable a is true : " + "a=5");
  }
//b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true : " + "b=83");
}
//c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true : " + "c++=13");
}
if (c === 13){
alert("condition 2 is true : " + "c=13");
}
if (++c < 14){
alert("condition 3 is true : " + "++c , 14");
}
if(c === 14){
alert("condition 4 is true : " + "c==14");
}
//d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals : " + totalCost);
}
//e. 
if (true){
alert("True");
}
if (false){
alert("False");
}

//f. 
if("car" < "cat"){
  alert("car is smaller than cat");
  }

  // 6) Write a program to take input the marks obtained in three subjects & total marks. Compute & show 
  //the resulting percentage on your page. Take percentage & compute grade as per following table:
  var totalMarks = parseInt(prompt("Enter total marks")); 
  var marksObtainedEnglish = parseInt(prompt("Enter marks obtained in English"));
  var marksObtainedPhysics = parseInt(prompt("Enter marks obtained in Physics"));
  var marksObtainedMaths = parseInt(prompt("Enter marks obtained in Maths"));
  
  var totalMarksObtained = marksObtainedEnglish + marksObtainedPhysics + marksObtainedMaths;
  var perc = (totalMarksObtained / totalMarks) * 100;

  if (perc >=80 && perc <=100){
  alert("Marks Sheet \n \n"
  + "Total Marks: "+totalMarks 
  + "\n Marks Obtained: "+totalMarksObtained
  +"\n Percentage: "+perc+"%"
  +"\n Grade: A-one"
  +"\n Remarks: Excellent");
}
  else if (perc >=70 && perc <80){
    alert("Marks Sheet \n \n"
    + "Total Marks: "+totalMarks 
    + "\n Marks Obtained: "+totalMarksObtained
    +"\n Percentage: "+perc+"%"
    +"\n Grade: A"
    +"\n Remarks: Good");

}

else if (perc >=60 && perc <70){
    alert("Marks Sheet \n \n"
    + "Total Marks: "+totalMarks 
    + "\n Marks Obtained: "+totalMarksObtained
    +"\n Percentage: "+perc+"%"
    +"\n Grade: B"
    +"\n Remarks: You need to improve");
}
    else if (perc <60){
        alert("Marks Sheet \n \n"
        + "Total Marks: "+totalMarks 
        + "\n Marks Obtained: "+totalMarksObtained
        +"\n Percentage: "+perc+"%"
        +"\n Grade: Fail"
        +"\n Remarks: Sorry");

}

// 7) Guess game:
//Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show
//“Close enough to the correct answer”.

var numberGuess = prompt("Guess number between 1 to 10")
if(numberGuess == 3){
  alert("Bingo! Correct answer.");
}else if(numberGuess == 4){
  alert("Close enough to the correct answer."); 
}else{
  alert("Wrong Answer");
}

// 8) Write a program to check whether the given number is divisible by 3. Show the message to the user 
//if the number is divisible by 3.

var numberDivBy3 = prompt("Enter a number to check weather it is divisible by 3")
var checkNumberDivBy3 =  numberDivBy3 % 3
if(checkNumberDivBy3 == 0){
  alert("Entered number is divisible by 3.");
}else{
  alert("Entered number is not divisible by 3");
}

// 9) Write a program that checks whether the given input is an even number or an odd number.

var numberOddEven = prompt("Enter a number to check even or odd")
var checknumberOddEven =  numberOddEven % 2
if(checknumberOddEven == 0){
  alert("Entered number is even number.");
}else{
  alert("Entered number is odd number");
}


// 10) Write a program that takes temperature as input and
//shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = prompt("Enter temperature")
if(temperature > 40){
  alert("It is too hot outside.");
}else if(temperature > 30 && temperature <= 40){
  alert("The Weather today is Normal."); 
}else if(temperature > 20 && temperature <= 30){
  alert("Today’s Weather is cool."); 
}else if(temperature > 10 && temperature <= 20){
  alert("OMG! Today’s weather is so Cool."); 
}else{
  alert("Wrong input");
}


// 11) Write a program to create a calculator for +,-,*, / & %
//using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.

var firstNumber = parseInt(prompt("Enter first number for calculation"))
var secondNumber = parseInt(prompt("Enter second number for calculation"))
var calcOperator = prompt("Enter calculation operator")
if(calcOperator == "+"){
var result = firstNumber + secondNumber;
}
else if(calcOperator == "-"){
    var result = firstNumber - secondNumber;
}
else if(calcOperator == "*"){
    var result = firstNumber * secondNumber;
}
else if(calcOperator == "/"){
    var result = firstNumber / secondNumber;
}
else if(calcOperator == "%"){
    var result = (firstNumber / secondNumber)*100 + "%";
}
alert(result);








