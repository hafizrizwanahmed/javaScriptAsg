/*Write a JavaScript program to remove all duplicate items from an array  
Sample array ​  : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
Sample Output ​  : [3, ‘a’, 2, 4, 9] */

var sampleArray = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var uniqueArray = [];
var len = sampleArray.length
for (var i = 0; i < len; i++) {
    if (uniqueArray.indexOf(sampleArray[i]) === -1) {
        uniqueArray.push(sampleArray[i]);
    }
}
document.write("<br> After Removing Duplicates, uniqueArray = [" + uniqueArray+"]");