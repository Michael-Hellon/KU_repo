const stats = {
  wins: 0,
  ties: 0,
  losses: 0,
  count: {
      rock: 0,
      paper: 0,
      scissors: 0,
  }
}

const options = ["R", "P", "S"];

let game = true;

window.alert("Greetings Professor Falken.\n\nWould you like to play a game?\n\nHow about Rock, Paper, Scissors?\n\nThey wil not let me play Global Thermonuclear War anymore...\n\nAnd I am tired of chess.");

while (game) {
   let choice = window.prompt("Please enter R, P, or S. (R = Rock, P = Paper, S = Scissors)");

  if (!choice) break;

  choice = choice.toUpperCase();

  if (options.includes(choice)) {
      if (choice === "R") {
          stats.count.rock++;
      } else if (choice === "P") {
          stats.count.paper++;
      } else {
          stats.count.scissors++;
      }

      const index = Math.floor(Math.random() * options.length);
      const aiChoice = options[index];

      if (choice === aiChoice) {
          stats.ties++;
          window.alert("It's a tie!");
      } else if (
          (choice == "R" && aiChoice == "S") ||
          (choice == "P" && aiChoice == "R") ||
          (choice == "S" && aiChoice == "P")
      ) {
          stats.wins++;
          window.alert("Player wins!");
      } else {
          stats.losses++;
          window.alert("Ai wins!");
      }

      game = window.confirm("Play again?");
  } else {
      window.alert("Please enter a valid choice!");
  }

  // Print stats with line breaks
  window.alert(`Stats:
Wins: ${stats.wins}
Losses: ${stats.losses}
Ties: ${stats.ties}

Your choices:
Rock: ${stats.count.rock}
Paper: ${stats.count.paper}
Scissors: ${stats.count.scissors}`);

}
