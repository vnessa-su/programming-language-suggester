// ----- Business Logic -----
function determineSuggestedLanguage(csharpSelectedCount, rubySelectedCount, javascriptSelectedCount) {
  let highestCount = csharpSelectedCount;
  let resultString = "C#";

  if(rubySelectedCount > highestCount) {
    highestCount = rubySelectedCount;
    resultString = "Ruby";
  } else if(rubySelectedCount === highestCount) {
    resultString = resultString + " or Ruby";
  }

  if(javascriptSelectedCount > highestCount) {
    highestCount = javascriptSelectedCount;
    resultString = "JavaScript";
  } else if(javascriptSelectedCount === highestCount) {
    resultString = resultString + " or JavaScript";
  }

  return resultString;
}

// ----- User Interface Logic -----
$(document).ready(function(){
  let csharpCount = 0;
  let rubyCount = 0;
  let javascriptCount = 0;

  $("#userInputForm").submit(function(event){
    event.preventDefault();
    const nameInput = $("input#userName").val();

    if(nameInput) {
      const nameDisplayString = ", " + nameInput;
      $("#userNameDisplay").text(nameDisplayString);
    }
    
    $(this).hide();
    $("#firstQuestion").show();
  });

  $(".answer-button").click(function(){
    const answerType = $(this).val();
    console.log(answerType + " answer button pressed");
    const cardId = $(this).closest(".card").attr("id");

    if(answerType === "csharp-answer") {
      csharpCount++;
    } else if(answerType === "ruby-answer") {
      rubyCount++;
    } else if(answerType === "javascript-answer") {
      javascriptCount++;
    } else {
      throw new Error("Invalid answer-button value");
    }

    console.log('csharp count: ' + csharpCount);
    console.log("ruby count: " + rubyCount);
    console.log("javascript count: " + javascriptCount);

    $(this).closest(".card").hide();
    if(cardId === "lastQuestion"){
      let resultOutputString = determineSuggestedLanguage(csharpCount, rubyCount, javascriptCount);
      $("#suggestedLanguage").text(resultOutputString);
      $("#quizCompleteDisplay").show();
    } else {
      $(this).closest(".card").next(".question-card").show();
    }
  });

  $("#seeResultsButton").click(function(){
    $(this).closest("div").hide();
    $("#suggestedLanguageDisplay").show();
  })
});