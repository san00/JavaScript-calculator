$(document).ready(function() {

    //currentNumber stores any numbers clicked
    var currentNumber = "";
    //storedNumber will store the previously clicked number,
    //if set to zero it will parse a number later on in the operator function(see below)
    var storedNumber = 0;
    //operator will be set to any math operator clicked
    var operator = "";

    $("#display").text("0");

    //function to display numbers
    $("#numbers a").not("#clear").click(function() {
        console.log("#numbers", {
            operator,
            storedNumber,
            currentNumber
        });
        currentNumber += $(this).text();
        $("#display").text(currentNumber);
        
    });

    // function to allow use of arithmatic operators
    $("#operators a").not("#equals").click(function() {

        console.log("#operators", {
            operator,
            storedNumber,
            currentNumber
        });
        operator = $(this).text();
        if (operator === "+") {
            storedNumber = storedNumber + parseInt(currentNumber, 10);

        } else if (operator === "-") {
            storedNumber = parseInt(currentNumber, 10) - storedNumber;

        } else if (operator === "/") {
            storedNumber = storedNumber / parseInt(currentNumber, 10);

        } else if (operator === "*") {
            storedNumber = storedNumber * parseInt(currentNumber, 10);
        }
        //parse the string being added to storedNumber to convert to number
        storedNumber = parseInt(currentNumber, 10);
        currentNumber = "";
        $("#display").text("0");

    });

    //function to clear input
    $("#clear").click(function() {
        console.log("#clear", {
            operator,
            storedNumber,
            currentNumber
        });
        currentNumber = "";
        $("#display").text("0");
        storedNumber = 0;
    })

    //function to output equals sum to display
    $("#equals").click(function() {
        //console.log with an object allows all variables to be outputted if they are used(ES6). Not specific to console.log
        console.log("#equals", {
            operator,
            storedNumber,
            currentNumber
        });
        if (operator === "+") {
            currentNumber = storedNumber + parseInt(currentNumber, 10);

        } else if (operator === "-") {
            currentNumber = storedNumber - parseInt(currentNumber, 10);

        } else if (operator === "/") {
            currentNumber = storedNumber / parseInt(currentNumber, 10);

        } else if (operator === "*") {
            currentNumber = storedNumber * parseInt(currentNumber, 10);
        }
        $("#display").text(currentNumber);
        storedNumber = 0;
    });

});
