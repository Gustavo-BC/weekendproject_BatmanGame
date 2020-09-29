let readlineSync = require('readline-sync');

// sample code to get started

console.log( "Welcome to Batman: Arkham Asylum!" );
console.log( "What do you want to do?" );
let option = readlineSync.question( "Options: look around, smack a prisoner, run away" );

switch(option) {
  case "look around":
    console.log( "You see a bunch of angry prisoners and the Joker!" );
    break;
  case "smack a prisioner":
    console.log( "Ouch! What did I ever do to you, man?" );
    break;
  case "run away":
    console.log( "Batman: \"Bats can't run.\"" );
    break;
  default: 
    console.log( "A prisoner punches you in the face." );
    console.log( "Prisoner: \"Quit messin' around.\"" );
}

// actual code created

console.log("You walk up to the Joker and say...");
let option1 = readlineSync.question("Options: What did you do?, I know what you did, You think this is a game?");

switch(option1) {
    case "What did you do?":
        console.log("Joker: \"I did a lot of things Bats. You're going to have to be more specific.\" * Joker giggles a little *");
        break;
    case "I know what you did":
        console.log("Joker: \"Yeah everyone knows. That's why I'm in here... to get some help - uh I mean atone for my sins.\" * Joker smirks *");
        break;
    case "You think this is a game?":
        console.log("Joker: \"cmon Bats! what's life without a little fun huh? Isn't that why you put on the suit to play the game of hero?\"");
        break;
    default:
        console.log("Joker: \"What are you lookin at Bats? miss me already?\"");

}

console.log("The Joker looks at you with his weird deformed smile and says: \"You know Bats, when was the last time you came for a visit to Arkham?\"");
console.log("Joker: \"A lot of things have changed since your last visit I reckon. You should REALLY be careful.\"");
console.log("Batman realizes that he is surrounded by a bunch of Joker's goons. All three goons start to lunge at you, what do you do?");

actions = ['You go head on against all three goons', 'you grab Joker and threaten the goons with killing their boss'];
index = readlineSync.keyInSelect(actions, "Which do you choose?");

switch(index) {
    case 0:
        console.log("After 2 minutes of constant fist fighting, Batman defeats all the goons.");
        console.log("Batman: \"Sorry Joker but you're going to have to do better than that.\"");
        console.log("Joker smiles and says: \"I think so too. How about this instead?\"");
        console.log("Joker reaches under his bunk bed to reveal a button. He presses it and the entire asylum begins its lockdown sequence.");

        actions1 = ['Batman makes a run for the entrance', 'Batman grabs Joker'];
        index1 = readlineSync.keyInSelect(actions1, "what do you do?");

        switch(index1) {
            case 0:
                console.log("You see that the door is about to close and at the last second you slide out.");
                console.log("To be continued...")
                break;
            case 1:
                console.log("Batman: \"I'm done playing games. I'm taking you out Joker.\"");
                console.log("Batman beats up Joker but just when he is about to lay the final punch...")
                console.log("The Riddler pops up with the Penguin and Bane following behind. They all smile.")
                console.log("To be continued...")
            break;
        }

        break;
    case 1:
        console.log("The goons look at each other and then laugh. One of them says: \"cmon Bats, we all know that you wouldn't kill Joker.\"");
        console.log("The goons proceed to fight you");
        console.log("Game Over. You lose.");
        break;
    default:
        console.log("The goons are surprised that Batman froze up. They capture him and get a big bonus from Joker.");

}

/*
courseOfAction = ['look around', 'smack a prisoner', 'run away'];
index = readlineSync.keyInSelect(courseOfAction,'Which do you choose?');

switch(index) {
    case 0:
      console.log( "You see a bunch of angry prisoners and the Joker!" );
      break;
    case 1:
      console.log( "Ouch! What did I ever do to you, man?" );
      break;
    case 2:
      console.log( "Batman: \"Bats can't run.\"" );
      break;
    default: 
      console.log( "A prisoner punches you in the face." );
      console.log( "Prisoner: \"Quit messin' around.\"" );
  }
  */
