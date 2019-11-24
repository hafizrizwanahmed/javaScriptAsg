/*Generate the following series in your browser. See example output. 

/*a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15  */
var counting = [];
for (let i = 1; i < 16; i++) {
    counting.push(i);
  }
  document.write("a. Counting: [" + counting + "]");

  document.write("<br>");
 
   /*b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1  */
   var reverseCounting = [];
   for (let i = 10; i > 0 ; i--) {
    reverseCounting.push(i);
  }
  document.write("b. Reverse Counting: [" + reverseCounting + "]");

  document.write("<br>");

  /*c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20  */
  var even = [];
  for (let i = 1; i < 21; i++) {
    if (i % 2 == 0) {
        even.push(i);
    }
  }
  document.write("c. Even: [" + even + "]");

  document.write("<br>");
  
  /*d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19  */
  var odd = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 != 0) {
        odd.push(i);
    }
  }
  document.write("d. Odd: [" + odd + "]");

  document.write("<br>");
  /*e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k  */
  var series = [];
  for (let i = 2; i < 21; i++) {
    if (i % 2 == 0) {
        series.push(i+"K");
    }
  }
  document.write("e. Series: [" +series+"]");