
        // @TODO 1) give this function a descriptive name
        //       2) provide your "tweet" description of what the function does in your commit message
        //
        //        Let's make great commit messages:
        //        -- remember to read https://chris.beams.io/posts/git-commit/
        //
        //        For now the key items from that post to apply are:
        //        -- Capitalize the commit message
        //        -- Do not end the message with a period
        //        -- Use the imperative mood in the subject line
        //        -- Your message completes this "If applied, this commit will" "Your commit message here"
        function nameThisFunction () {

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
