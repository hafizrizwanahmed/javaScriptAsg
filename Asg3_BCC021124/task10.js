/*Sort an array from smallest to largest value 
A = [20,53,78,4,91,12] 
Output should be : [4,12,20,53,78,91] */

var aryA = [20, 53, 78, 4, 91, 12];
var ascendAryA = aryA.sort(function(a,b){return a-b});

document.write("<br>Smallest - Largest Value: [" + ascendAryA + "]");