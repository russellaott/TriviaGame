// Object that holds all of our questions and answer choices
var questions = [{
    question: "What famous musician is also an avid archer?",
    choices: ["Billy Joel", "Ted Nugent", "Michael Jackson", "Justin Beiber"],
    correctAnswer: 1
}, {
    question: "Whats the first name of the archery legend with last name of Bear ?",
    choices: ["Joseph", "Melanie", "Fred", "Joe Bob Jenkins"],
    correctAnswer: 2
}, {
    question: "A life long archer and bow hunter from Oregon that works for Under Armour?",
    choices: ["Clint Eastwood", "Cam Hanes", "Colby Covington", "Barrack Obama"],
    correctAnswer: 1
}, {
    question: "Podcast super star that is a huge archery advocate?",
    choices: ["Joe Rogan", "Chris Delia", "Ariel Helwani", "Adam Corolla"],
    correctAnswer: 0
}, {
    question: "One of the world's biggest bow manufacturers",
    choices: ["Hoyt", "Triton", "King Fisher", "North Face"],
    correctAnswer: 0
}];
// variable to store the current question number
var currentQuestion = 0;
// variable that stores the number of correct answers
var correctAnswers = 0;
// variable boolean used to determine when the quiz is over
var quizOver = false;


$(document).ready(function () {

   
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore(); 
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { 
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});


function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    
    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}