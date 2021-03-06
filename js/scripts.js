// ----- Business Logic -----
function determineSuggestedLanguage(csharpSelectedCount, rubySelectedCount, javascriptSelectedCount) {
  let highestCount = csharpSelectedCount;
  let resultArray = ["C#"];

  if(rubySelectedCount > highestCount) {
    highestCount = rubySelectedCount;
    resultArray = ["Ruby"];
  } else if(rubySelectedCount === highestCount) {
    resultArray.push("Ruby");
  }

  if(javascriptSelectedCount > highestCount) {
    highestCount = javascriptSelectedCount;
    resultArray = ["JavaScript"];
  } else if(javascriptSelectedCount === highestCount) {
    resultArray.push("JavaScript");
  }

  return resultArray;
}

// ----- User Interface Logic -----
$(document).ready(function(){
  let csharpCount = 0;
  let rubyCount = 0;
  let javascriptCount = 0;

  $("#userInputForm").submit(function(event){
    event.preventDefault();
    const nameInput = $("input#userName").val();
    let nameDisplayString;

    if(nameInput) {
      nameDisplayString = ", " + nameInput;
    } else {
      nameDisplayString = "";
    }
    $("#userNameDisplay").text(nameDisplayString);
    
    $(this).hide();
    $("#firstQuestion").show();
    $("#reset-button").show();
  });

  $(".answer-button").click(function(){
    const answerType = $(this).val();
    const cardId = $(this).closest(".card").attr("id");

    $(this).closest(".card").hide();

    if(answerType === "csharp-answer") {
      csharpCount++;
    } else if(answerType === "ruby-answer") {
      rubyCount++;
    } else if(answerType === "javascript-answer") {
      javascriptCount++;
    } else {
      throw new Error("Invalid answer-button value: " + answerType);
    }

    if(cardId === "lastQuestion"){
      let resultOutputArray = determineSuggestedLanguage(csharpCount, rubyCount, javascriptCount);
      if(resultOutputArray.indexOf("C#") > -1) {
        $("#csharpColumn").load("csharp.html");
        $("#csharpColumn").show();
      }
      if(resultOutputArray.indexOf("Ruby") > -1) {
        $("#rubyColumn").load("ruby.html");
        $("#rubyColumn").show();
      }
      if(resultOutputArray.indexOf("JavaScript") > -1) {
        $("#javascriptColumn").load("javascript.html");
        $("#javascriptColumn").show();
      }

      $("#quizCompleteDisplay").show();
    } else {
      $(this).closest(".card").next(".question-card").show();
    }
  });

  $("#seeResultsButton").click(function(){
    $(this).closest("div").hide();
    $("#suggestedLanguageDisplay").show();
  });

  $("#reset-button").click(function(event){
    event.preventDefault();
    csharpCount = 0;
    rubyCount = 0;
    javascriptCount = 0;

    
    $(".showing-initially").show();
    $(".hidden-initially").hide();
    $("#userInputForm").get(0).reset();
  });
});