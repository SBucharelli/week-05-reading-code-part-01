
        // Decides on whether the computer is playing a, b or c
        function computerDecision() {
            let choices = ['a', 'b', 'c'];
            let randomChoice = Math.floor(Math.random() * choices.length);
            return choices[randomChoice];
        }
