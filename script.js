
      
        // Decide who wins based on the player & computer choice
        function decideWinner(playerChoice, computerChoice) {
            let resultClass;

            // Who wins, What text is shown & What class is applied to the result screen
            if (playerChoice === computerChoice) {

                // If there is a tie
                winner = tieText;
                resultClass = "tie";

            } else if (playerChoice === "a") {

                // If the player chooses "a"
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

            }  else if (playerChoice === "c") {

                // If the player chooses "c"
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

                // If the player chooses "b"
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

            // Set the class of the result screen
            $('.result').attr('class', 'result ' + resultClass);

            return winner;

        }
