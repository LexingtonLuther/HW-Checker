console.clear();
const sad = document.getElementById("sad");
const happy = document.getElementById("happy");
setInterval(upTime, 1000);

function upTime() {
  let theTime = Number($("#theTime").text());
  theTime = theTime + 1;
  $("#theTime").text(theTime);
}

$("input").change(onChange);

function onChange(evt) {
  let correct = $(this).data("correct");
  let correct2 = $(this).data("correct2");
  let response = $(this).val();
  
  console.log(md5(response));
  if ((correct == response) || (correct2 == response)) {
    happy.play();
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
    let theScore = Number($("#score").text());
    theScore += 12.5;
    $("#score").text(theScore);
  } else if (response == "") {
    let theScore = Number($("#score").text());
    if (theScore > 0) {
      theScore -= 12.5;
      $("#score").text(theScore);
    }
    $(this)
      .removeClass("correct");
  } else {
    if (Math.random() > 0.1) {
      sad.play();
    }
    let theScore = Number($("#score").text());
    if (theScore > 0) {
      theScore -= 12.5;
      $("#score").text(theScore);
    }
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
  }
}