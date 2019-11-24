/*We have the following arrays:  
var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"]; 
var o = ["th","st","nd","rd"]; 
Write a JavaScript program to display in the following way : 
1st choice is Karachi 
2nd choice is Lahore 
3rd choice is Islamabad */

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
for (var i = 0; i < aCities.length; i++) {
  for (var j = 0; j < o.length; j++) {
    if (i ==0 && o[j] == 'st') {
        document.write("1" + o[j] + " choice is " + aCities[0]);
    }
    else if (i ==1 && o[j] == 'nd') {
        document.write("<br> "+ "2" + o[j] + " choice is " + aCities[1]);
    }
    else if (i ==2 && o[j] == 'rd') {
        document.write("<br> "+ "3" + o[j] + " choice is " + aCities[2]);
    }
    else if (i ==3 && o[j] == 'th') {
        document.write("<br> "+ "4" + o[j] + " choice is " + aCities[3]);
    }
  }
}