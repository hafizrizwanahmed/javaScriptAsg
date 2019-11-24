/*Initialize an array with color names. Display the array elements in your browser: */

document.write("<br> Question 3 <br>");
var colors = ["Red", "Blue", "Green"];
document.write("colors = ["+colors+"]");

/*A. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array 
in your browser. */

var addBegColor = prompt("what color you want to add to the beginning?");
colors.unshift(addBegColor);
document.write(" <br>A:  After Add in the beginning... colors = [" + colors+"]");

/*B. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
Display the updated array in your browser. */ 

var addEndColor = prompt("what color you want to add to the end?");
colors.push(addEndColor);
document.write("<br>B:  Add in the end... colors =["  + colors + "]");

/*C. Add two more color to the beginning of the array. Display the updated array in your browser.  */

colors.unshift("White", 'Black');
document.write(" <br>C:  Add 2 more colors... colors =[" + colors+"]");

/*D. Delete the first color in the array. Display the updated array in your browser.  */

colors.shift();
document.write(" <br>D:  Delete 1st color... colors =["  + colors+"]");

/* E. Delete the last color in the array. Display the updated array in your browser.  */

colors.pop();
document.write("<br>E:  Delete last color... colors =[" + colors+"]");

/* F. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated 
array in your browser. */ 

var whichIndexIns = prompt("which index you wants to add a color?");
var whichColor = prompt("color name?");
colors.splice(whichIndexIns, 0 , whichColor);
document.write(" <br>G:  Add to index... colors =[" + colors+"]");

/*G. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of 
color(s) from user-defined position/index. . Display the updated array in your browser.*/

var whichIndex = prompt("which index you wants to delete color?");
var howMany = prompt("how many colors you wants to delete")
colors.splice(whichIndex, howMany);
document.write(" <br>G:  Delete from index... colors =[" + colors+"]");