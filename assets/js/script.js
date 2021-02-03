//Function for toggling answers

$("#question-one").click(function() {
    $("#answer-one").toggle(400);
});

$("#question-two").click(function() {
    $("#answer-two").toggle(400);
});

$("#question-three").click(function() {
    $("#answer-three").toggle(400);
});

$("#question-four").click(function() {
    $("#answer-four").toggle(400);
});

$("#question-five").click(function() {
    $("#answer-five").toggle(400);
});

//Function for changing .Questions style

$("#question-one").click(function() {
    $("#question-one").toggleClass("clicked-question");
});

$("#question-two").click(function() {
    $("#question-two").toggleClass("clicked-question");
});

$("#question-three").click(function() {
    $("#question-three").toggleClass("clicked-question");
});

$("#question-four").click(function() {
    $("#question-four").toggleClass("clicked-question");
});

$("#question-five").click(function() {
    $("#question-five").toggleClass("clicked-question");
});