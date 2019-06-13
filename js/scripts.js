$(document).ready(function() {
    $("form#userInput").submit(function(event){

      var total = 1;
      for (var output = 1; output <= upperLimit; output *= multiVal) {
        $("ul#result-list").append(output);
        console.log("output is " + output);
      }
      alert(output);

      var upperLimit = $("input#upperLimit").val();
      var multiVal = $("input#multiVal").val();
      console.log("Upper limit is " + upperLimit);
      console.log("Multiplication value is " + multiVal);

      $(".result").show();
      $("span#upperLimit-result").text(upperLimit);
      $("span#multiVal-result").text(multiVal);



      event.preventDefault();
    });
});
