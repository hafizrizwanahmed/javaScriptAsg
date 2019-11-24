/*Write a JavaScript program to compute the union of two arrays. (Merge two 
arrays by removing all duplicates) 
var a = [10,20,4,40,60,70] 
var b = [1,2,3,4,5,6,7,8,9,10] 
Output should be: 
[1,2,3,4,5,6,7,8,9,10,20,40,60,70] */

var array1 = [10, 20, 4, 40, 60, 70];
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var array3 = array2.concat(array1); //
var output = [];


for (var i = 0; i < array3.length ; i++) {
    if (output.indexOf(array3[i]) === -1) {
        output.push(array3[i]);
    }
}

document.write("<br> Union: [" + output+"]");