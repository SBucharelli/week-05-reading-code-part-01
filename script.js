
        // @TODO 1) Give this function a descriptive name in place of `nameThisFunction`
        //          
        //          Replace `nameThisFunction` with a name you will find more descriptive.
        //          
        //          Read the code of the function to come up with a name.
        //
        //       2) Rename any variables to match any understanding you make about the code
        //             
        //       3) provide your short description of what the function does in your commit message
        //
        //        Let's make great commit messages:
        //        -- remember to read https://chris.beams.io/posts/git-commit/
        //
        //        For now the key items from that post to apply are:
        //        -- Capitalize the commit message
        //        -- Do not end the message with a period
        //        -- Use the imperative mood in the subject line
        //        -- Your message completes this "If applied, this commit will" "Your commit message here"
        function computerDecision() {
            // Decides on whether the computer is playing a, b or c
            let choices = ['a', 'b', 'c'];
            let randomChoice = Math.floor(Math.random() * choices.length);
            return choices[randomChoice];
        }
