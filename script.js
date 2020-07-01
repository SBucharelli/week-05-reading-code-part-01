
// @TODO 1) Give this function a descriptive name in place of `nameThisFunction`
//          
//          Replace `nameThisFunction` with a name you will find more descriptive.
//          
//          Read the code of the function to come up with a name.
//              
//       2) Commit your changes to `challenge02`. Provide your short description of what the function does in your commit message
//
//        Let's make great commit messages:
//        -- remember to read https://chris.beams.io/posts/git-commit/
//
//        For now the key items from that post to apply are:
//        -- Capitalize the commit message
//        -- Do not end the message with a period
//        -- Use the imperative mood in the subject line
//        -- Your message completes this "If applied, this commit will" "Your commit message here"

// This function will display the new score for the current round and display which player one.
// If it's round 1 though, it will simply show round 1 since there will not have been a round played yet.
function nameWinner(playerChoice, computerChoice, winnerText) {

    $('.player-choice').text(playerChoice);
    $('.computer-choice').text(computerChoice);
    $('.winner').text(winnerText);


    if (round !== 1) {


        setTimeout(function () {
            setScore();
        }, 4000);

    } else {


        setScore();
        $('.round').text(round);

    }

}
