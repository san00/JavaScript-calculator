$(document).ready(function(){

//number stores any numbers clicked
var number = "";
//newnumber will store  first inputted number
var newnumber = "";
//operator will be set to any math operator clicked
var operator = "";
var displaydiv = $("#display");
displaydiv.text("0");

//function to display numbers
// append allows for numbers to be added to display
$("#numbers a").not("#clear").click(function() {
    number += $(this).text();
    displaydiv.text(number);
    // testNumlength(number); this relates to a function that should check the length of input so it doesn't go outside the display but it's not implemented yet
});

// function to allow use of arithmatic operators

$("#operators a").not("#equals").click(function() {
    operator = $(this).text();
    newnumber = number;
    number = "";
    displaydiv.text("0");
});

//function to clear input

$("#clear").click(function() {
    number = "";
    displaydiv.text("0");
			newnumber = "";
    // newnumber = "";
})

//function to output sum to display
$("#equals").click(function() {
    if (operator === "+") {
        number = (parseInt(newnumber, 10) + parseInt(number, 10)).toString(10);

    } else if (operator === "-") {
        number = (parseInt(newnumber, 10) - parseInt(number, 10)).toString(10);

    } else if (operator === "/") {
        number = (parseInt(newnumber, 10) / parseInt(number, 10)).toString(10);

    } else if (operator === "*") {
        number = (parseInt(newnumber, 10) * parseInt(number, 10)).toString(10);
    }
    displaydiv.text(number);
    newnumber = " ";
    number = " ";
});

});
