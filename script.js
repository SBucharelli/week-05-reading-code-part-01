
// @TODO 1) Give this function a descriptive name in place of `nameThisFunction`
//          
//          Replace `nameThisFunction` with a name you will find more descriptive.
//          
//          Read the code of the function to come up with a name.
//
//       2) Rename any variables to match any understanding you make about the code
//             
//       3) Commit your changes to `challenge04`. Provide your short description of what the function does in your commit message
//
//        Let's make great commit messages:
//        -- remember to read https://chris.beams.io/posts/git-commit/
//
//        For now the key items from that post to apply are:
//        -- Capitalize the commit message
//        -- Do not end the message with a period
//        -- Use the imperative mood in the subject line
//        -- Your message completes this "If applied, this commit will" "Your commit message here"

// This function will take the inputs of the Player and Computer, execute the game based on the possible outcomes,
// and then displays the outcome of whether a player won/lost or both players tied.
function executeAndDisplayRoundOfGame(playerChoice, computerChoice) {
    let resultClass;

    if (playerChoice === computerChoice) {

        winner = tieText;
        resultClass = "tie";

    } else if (playerChoice === "a") {

        switch (computerChoice) {
            case "b":
                winner = playerWinsText;
                playerScore++;
                resultClass = "win";
                break;
            case "c":
                winner = computerWinsText;
                computerScore++;
                resultClass = "lose";
                break;
        }

    } else if (playerChoice === "c") {

        switch (computerChoice) {
            case "a":
                winner = playerWinsText;
                playerScore++;
                resultClass = "win";
                break;
            case "b":
                winner = computerWinsText;
                computerScore++;
                resultClass = "lose";
                break;

        }

    } else {

        switch (computerChoice) {
            case "a":
                winner = computerWinsText;
                computerScore++;
                resultClass = "lose";
                break;
            case "c":
                winner = playerWinsText;
                playerScore++;
                resultClass = "win";
                break;
        }

    }

    $('.result').attr('class', 'result ' + resultClass);

    return winner;

}
