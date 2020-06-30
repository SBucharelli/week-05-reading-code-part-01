
        // @TODO give this function a name and provide your description of what the function does in your commit message
        function nameThisFunction(playerChoice, computerChoice, winnerText) {

            $('.player-choice').text(playerChoice);
            $('.computer-choice').text(computerChoice);
            $('.winner').text(winnerText);

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
