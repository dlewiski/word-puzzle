$(document).ready(function () {
  $(".result").hide();
  $("#sentence").submit(function(event){
    event.preventDefault();

    var string = $("#fullSentence").val();
    var letters = string.split("");
    // var noVowels = string.replace(/[aeiou]/g, '-');
    // var newArray = letters.map(function(letter)

     for (index = 0; index < letters.length; index += 1){
      if ((letters[index] === "a") || (letters[index] === "e")|| (letters[index] === "i") || (letters[index] === "o") || (letters[index] === "u")){
        letters[index] = ("-");
      } else {
        (letters[index]);
      };
    };
    var noVowels = letters.join(" ");
    $("#puzzle").text(noVowels);
    $("#sentence").hide();
    $(".result").show();
    // alert(noVowels);

  });
});
