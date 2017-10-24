$(document).ready(function(){

    $("#puzzle").submit(function(event){
      event.preventDefault();
      var userInput = $("input#sentenceInput").val();
      var vowels = ["a", "e", "i", "o", "u"];
      var splitUserInput = userInput.split("");
      for(var iLetter = 0; iLetter < splitUserInput.length; iLetter +=1){
        for(var iVowel = 0; iVowel < vowels.length; iVowel += 1){
          if(splitUserInput[iLetter] === vowels[iVowel]) {
            splitUserInput[iLetter] = "-";
          };
        };
      };
      $("#sentenceOutput").text(splitUserInput.join(""));
    });
});
