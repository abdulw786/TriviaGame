var card = $("#result");

// Question set
var questions = [{
  question: "What is the largest rodent in the world?",
  answers: ["Brown Rat", "Mole", " Raccoon", "Capybara"],
  correctAnswer: "Capybara"
}, {
  question: "In soccer, who was the 2009 Fifa World Player of the Year?",
  answers: ["Kaka","Cristiano Ronaldo","Lionel Messi","Xavi Hernandez"],
  correctAnswer: "Lionel Messi"
}, {
  question: ". On the Nickelodeon TV show \"Spongebob Squarepants,\" who is the money-loving owner of the Krusty Krab?",
  answers: [" Spongebob Squarepants","Eugene Krabs","Patrick Star"," Plankton"],
  correctAnswer: "Eugene Krabs"
}, {
  question: "Where did the 2008 Summer Olympics take place?",
  answers: ["Vancouver, Canada","Athens, Greece","Sydney, Australia","Beijing, China"],
  correctAnswer: "Beijing, China"

}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 30,
/*---- holy %%%% i forgot about this type of thing , */ 
  
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
/*---Starting our Timer ----*/
  start: function() {
    timer = setInterval(game.countdown, 1000);
//prepend element w/ timer 
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");

    $("#start").remove();
//loop for comparing the two question values 
    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
//comparing the input values "human guess" against correct answer from array 
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();

  },

  result: function() {

    clearInterval(timer);

        $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
