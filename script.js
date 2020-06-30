
        // Sets all the values on the board
        function showChoicesAndWinner(playerChoice, computerChoice, winnerText) {

            $('.player-choice').text(playerChoice);
            $('.computer-choice').text(computerChoice);
            $('.winner').text(winnerText); // Who won the round

            // If the game has been reset set the score immediately
            if(round !== 1) {

                // Set the values once the animation has finished
                setTimeout(function(){
                    setScore();
                }, 4000);

            } else {

                // Set the values immediately
                setScore();
                $('.round').text(round);

            }

        }
