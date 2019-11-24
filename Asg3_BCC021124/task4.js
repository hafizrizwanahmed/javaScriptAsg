/*Write a program to initialize an array with city names. Copy 3 array elements from cities 
array to selected cities array.  */

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = cities.slice(2, 4);
document.write('Cities List: <br>' + cities + '<br> <br> Selected List <br> ' + selectedCities);