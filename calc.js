
          $("#display").text("0");

            $("#clear").click(function() {
                $("#display").empty();
            });

//function to display numbers
// append allows for numbers to be added to display
            function numbers() {
                $("#zero").click(function() {
                  // $("#zero").data(num,0);
                    // $("#display").append("0");
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

                $('#equals').click(function() {
                $("#equals").eval(numbers);
                });

                // $('#').click(function() {
                // $("#display").text("1");
                // });
            }
//separate display function to append numbers to display
              $("#display").append(numbers);

function equals(){
  $("equals").eval(numbers).append(numbers);
}

function add(numbers){
  var a = numbers;
  var b = number2;
  var c = number1 + number2;
  return c

}
