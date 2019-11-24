/*Write a program to identify the largest number in the given array.  
A = [24, 53, 78, 91, 12].*/

var lar = [24, 53, 78, 91, 12];
var largest = 0;
for (var i = 0; i <= lar.length; i++) {
  if (lar[i] > largest) {
     largest = lar[i];
  }
}
document.write(largest);
document.write("<br>");