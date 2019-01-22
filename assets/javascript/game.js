$(document).ready(function () {
    var targetNum = Math.floor(Math.random(19, 100) * (100 - 19) + 19);
    var counter = 0;
    var losses = 0;
    var wins = 0;
    var box1 = Math.floor(Math.random() * 10) + 1;
    var box2 = Math.floor(Math.random() * 10) + 1;
    var box3 = Math.floor(Math.random() * 10) + 1;
    var box4 = Math.floor(Math.random() * 10) + 1;
    $(".box").on("click", function (event) {
        var userGuess;
        if (event.target.id === 'box1') {
            userGuess = box1;
        } else if (event.target.id === 'box2') {
            userGuess = box2;
        } else if (event.target.id === 'box3') {
            userGuess = box3;
        } else {
            userGuess = box4;
        }
        counter += userGuess;
        $(".userGuess").text(counter);
        $(".random").text(targetNum);
        if (counter === targetNum) {
            wins++;
            counter = 0;
            targetNum = Math.floor(Math.random(19, 120) * (120 - 19) + 19);
            console.log("wins", wins);
        } else if (counter > targetNum) {
            losses++;
            counter = 0;
            targetNum = Math.floor(Math.random(19, 120) * (120 - 19) + 19);
            console.log("loss", losses);
        }
        $(".losses").text(losses);
        $(".wins").text(wins);
    });
});