function vowelFinder(vowels, letters, index, index2) {
  for (index2 = 0; index2 < vowels.length; index2 +=1){
		if (letters[index] === vowels[index2]) {
        letters[index] = ("-");
  		};
  	};
};

//Old vowel finder function
// function vowelFinder(letters, index) {
//     if ((letters[index] === "a") || (letters[index] === "e")|| (letters[index] === "i") || (letters[index] === "o") || (letters[index] === "u")){
//     letters[index] = ("-");
//   } else {
//     (letters[index]);
//   };
// };

$(document).ready(function () {
  $(".result").hide();
  $("#sentence").submit(function(event){
    event.preventDefault();

    var string = $("#fullSentence").val();
    var letters = string.split("");
    var vowels = ["a", "e", "i", "o", "u"];
    var index2 = 0;

    // var vowel = ("a", "e", "i", "o", "u");
    // alert(vowel);

    // var noVowels = string.replace(/[aeiou]/g, '-');
    // var newArray = letters.map(function(letter)

     for (index = 0; index < letters.length; index += 1){
       vowelFinder(vowels, letters, index, index2);
    };
    var noVowels = letters.join("");
    $("#puzzle").text(noVowels);
    $("#sentence").hide();
    $(".result").show();
    // alert(noVowels);

  });
});
