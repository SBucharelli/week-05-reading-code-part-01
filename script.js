
        // Set all variables to their base values
        function resetGame () {

            playerChoice = "";
            computerChoice = "";
            winner = "";
            round = 1;
            playerScore = 0;
            computerScore = 0;

            setValues();

            $('body').removeClass('end-game weapon-chosen');
            $('.play-again').show();

        }
