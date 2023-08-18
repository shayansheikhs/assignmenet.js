// add
const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
  
// ff
const num3 = 5;
const num4 = 3;  
const sum1 = num3 - num4
document.write("<br> The sum of " + num3 + " and " + num4 + " is " + sum1 )

// multiplication
const num5 = 5;
const num6 = 3;  
const sum2 = num5 * num6
document.write("<br> The sum of " + num5 + " and " + num6 + " is " + sum2 )

// division
const num7 = 5;
const num8 = 3;  
const sum3 = num7 / num8
document.write("<br> The sum of " + num7 + " and " + num8 + " is " + sum3 )

// modulus
const num9 = 5;
const num10 = 3;
const sum4 = num9 % num10;
document.write(' <br>The sum of ' + num9 + ' and ' + num10 + ' is: ' + sum4);
document.write('Table of ' + tableNumber);
document.write("<br>");
var tableNumber = 4;
for  (var i = 1; i <= 10; i++) {
    document.write(tableNumber + ' X ' + i + ' = ' + i * 4);
    document.write("<br>"); 
}

// Total cost to buy ticket
 const num11 = 600
 const num12 = 5
 const sum5 = num11 *num12
 document.write(" <br>Total cost to buy " +  num12+ " ticket to move is " + sum5 )

//  Shopping Cart 
 document.write("<h1> Shopping Cart </h1>")
 var priceofitem1 = 650
 document.write(" <br/>Price of item 1 is " + priceofitem1)
 var qualityofitem1 = 3
 document.write(" <br/>Quality of item 1 is  " + qualityofitem1)
 var priceofitem2 = 100
 document.write(" <br/>Price of item 2 is " + priceofitem2)
 var qualityofitem2 = 7
 document.write(" <br/>Quality of item 2 is  " + qualityofitem2)
 var shippingcharges =100
const sum6 = priceofitem1 * qualityofitem1 + priceofitem2 *qualityofitem2 + shippingcharges;
document.write(' <br/>total cost of your order is' + sum6  + " PKR")

// Marks Sheet
document.write("<h1> Marks Sheet </h1>")
var totalmarks = 980
var Marksobtained = 804
const sum7 =  Marksobtained / totalmarks
const sum8 = sum7 * 100
document.write("Percentage  =  " + sum8  + " %")

// Total Currency in PKR
document.write("<h1> Currency in PKR </h1>")
const Dollor = 104.80
const Riyal =  28
const sum9 = ( Dollor * 10) +( Riyal * 25)
document.write( " Total Currency in PKR: " + sum9 )

// Age Calclation 
document.write("<h1> Age Calclation </h1>")
const currentyear = 2016
const Birthyear = 1992
const sum10 = currentyear - Birthyear
document.write( " Your Age is : " + sum10 )

// The Geometrize
document.write("<h1> The Geometrize </h1>")
const radiusofcircle = 20
document.write( " radius of circle : " + radiusofcircle )
const sum11 = 2 * 3.142 * 20
document.write( "  <br> The  circumference is : " + sum11 )
const sum12 = 3.142 * (20 * 20)
document.write( "  <br> The  area is: " + sum12 )
// The Lifetime Supply Calculator

document.write("<h1>  The Lifetime Supply Calculator </h1>")
var favouriteSnack = 'chocolate chip';
document.write( "  <br>  Favourite Snack: " + "chocolate chip" )
var currentAge = 15;
document.write( "  <br>  Current age:  " + currentAge)
var maxAge = 65;
document.write( "  <br>  Estimated  Maximum age : " + maxAge)
var snacksPerDay = 3;
document.write( "  <br>  Amount of snacks per day : " + snacksPerDay)
var totalNeeded = (maxAge - currentAge) * snacksPerDay;
document.write(' <br/>You will need ' + totalNeeded + ' ' + favouriteSnack +' to last until the ripe old age is ' + maxAge);