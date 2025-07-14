

let const var

OPERATORS

( = Assignment Operator )
( == Comparison Opertor )
( === Comparison Opertor with data type )
( 5 > 4 Greater Than )
( 5 < 4 Less Than  )
( 5 <= 4 Less Than  )
( 5 >= 4 Less Than  )
( 5 != 4 Not Equal  )
( 5 !== 4 Not Equal with data type  )

+
-
/
%
*


const myname = "5"
const myage = 5;

const firstNum = 5;
const secNum = 5;
document.write( firstNum + secNum  + "<br />" )
document.write( firstNum - secNum   + "<br />")
document.write( firstNum * secNum   + "<br />")
document.write( firstNum / secNum   + "<br />")
document.write( firstNum % secNum   + "<br />")


const h1 = document.getElementById("heading")
 const btn = document.getElementById("button");

 btn.addEventListener("click" , () => {
    h1.style.color = "red"
 })