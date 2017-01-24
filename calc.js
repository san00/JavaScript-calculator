// $("#display").text("0");

$("#clear").click(function() {
    $("#display").empty().text('0');
});

//function to display numbers
// append allows for numbers to be added to display
function numbers() {
    $("#zero").click(function() {
        $("#display").append("0");
    });

    $("#one").click(function() {
        $("#display").append("1");
    });
    //
    $("#two").click(function() {
        $("#display").append("2");
    });
    $('#three').click(function() {
        $("#display").append("3");
    });

    $('#four').click(function() {
        $("#display").append("4");
    });

    $('#five').click(function() {
        $("#display").append("5");
    });

    $('#six').click(function() {
        $("#display").append("6");
    });
    $('#seven').click(function() {
        $("#display").append("7");
    });
    $('#eight').click(function() {
        $("#display").append("8");
    });
    $('#nine').click(function() {
        $("#display").append("9");
    });
}
//separate display function to append numbers to display
$("#display").append(numbers);
