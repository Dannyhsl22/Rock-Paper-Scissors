# Rock-Paper-Scissors-Lizard-Spock

Rock Paper Scissors Lizard Spock is a game of chance that expands. It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in "The Lizard-Spock Expansion".

It is mentioned again in "The Rothman Disintegration", where Sheldon explains the rules to Penny and Barry Kripke.

The game was originally created by Sam Kass with Karen Bryla. According to an interview with Kass, the series producers did not originally ask for permission to use the game, but Kass was officially referenced by Sheldon as the creator of the game during the "The Rothman Disintegration", after which he states, "Hail Sam Kass!" to which Leonard, Howard, Raj, and Sheldon all then chant "Hail!" while raising their hands.

![Am i responsive](/workspace/Rock-Paper-Scissors-Lizard-Spock/media/mockup.png)

[View the live project here](https://dannyhsl22.github.io/Rock-Paper-Scissors/)

## UX
### User Stories
Create an interactive game Rock, Paper, Scissors Lizard Spock where the user challenges the computer.

* At the top of the screen, the game logo and a display "How to Play" button for the user to know the game rules.

* "How to play" button which has a modal popup which explains the rules of the game.

    The popup should include the following:

    * Instruction of how to play the game.

    * Rules for the game showing :

           * Rock crushes Scissors
           * Rock crushes Lizard
           *  Paper beats Rock 
           *  Paper disproves Spock
           *  Scissors beats Paper 
           *  Scissors decapitates Lizard 
           *  Lizard poisons Spock
           *  Lizard eats Paper
           *  Spock vaporizes Rock 
           *  Spock smashes Scissors

* Results area to show the results of the game showing “User” and “Computer” scores. The scores will increment by 1 when either the user or computer wins.

* Timer to see how quickly you can beat the computer.

* At the middle of the screen, display 5 control buttons for the user to select their choice.

* Button 1 will have the word Rock, and an icon showing the rock Emoji.

* Button 2 will have the word Paper, and an icon showing the paper Emoji.

* Button 3 will have the word Scissors, and an icon showing the scissors Emoji.

* Button 4 will have the word Lizard, and an icon showing a Lizard Emoji.

* Button 5 will have the word Spock, and an icon showing the Spock hand signal.

* Shadow the buttons for 3d effect to show the user they clicked the wanted button, with different colors based on winning, losing, or if it is a tie.


* Once the user has pressed one of the choice buttons, the code will generate a random choice to reflect the computers choice.  Both choices will then be shown as a single word in the game area for the user and computer, and the score below will be updated accordingly.


    If the users wins, add 1 to the users score and update the results with "You win!".

    If the computer wins, add 1 to the computers score and update the results with "You lost!".

    If the user and computer select the same choice this will be a draw and the scores will not update. Display the result as "It's a Tie!".

* At the bottom of the screen, display one button for setting a timer to show how much the user can score to beat the computer
 with a button to "Start timer". If the “Start timer” button is pressed, the code will start the mmss process and this time will be displayed in the “Time taken” area and update every second.


### Strategy
My goal in the design was to include minimalist but useful information with eye catching images. This website is aimed to attract all demographics with an interest in playing a quick simple game.

### Scope
For the users, I wanted to provide them with instructions on how to play the game with buttons that has emojis to show the options. The game has responsive design so should function correctly across various devices such as Desktop , Mobiles, Tablet, and Laptop.

### Structure
I wanted the game to be eye catching and fun with instructions of how to play the game. 

### Skeleton
The wireframes were created using wireframepro.

![image]()


![image]()


### Surface
#### Images
The main rock paper scissors (rps) image was found on https://www.pinterest.com/ and I cropped the image down to get the individual images for rock, paper and scissors. 

![image]()


![image]()

![image]()

![image]()

![image]()


I also used an image resizer to get the images to the same size. https://www.iloveimg.com/

#### Typography
I decided to use “Play” and “San-serif” for the main body text. These were found by exploring Google Fonts.

## Technologies
### Languages
1.	HTML
2.	CSS
3.	JavaScript
### Libraries
* Google Fonts – Play, Sans-serif fonts

* Font Awesome – used for icons throughout the website

* WireframePro – used for the creation of the wireframes.

## Features
### Header
* Featured at the top of the page shows the game name: Rock Paper Scissors Lizard Spock in a font that is clearly contrasts with the background.

![image]()

### Controls
* Three buttons displaying the options of either rock, paper ,scissors, lizard and spock.

![image]()


### Game Results
* When the user clicks an option, the emoji button relating to their choice would show a pointer anda a colored box shadow .

* The JavaScript code chooses a random option for the computer player, displays the image relating to the computer’s choice, and then determine who the winner is.

* The winner is announced to the user above the control buttons, and the score is updated for either the user or the computer depending on who won.

* The results and score are clear to the user, making the game easy to play, understand who won, and what the score is.

![image]()

### Time taken
* The time taken to beat the computer is shown here if the user has been using the timer.


![image]()

### Player area
* Your choice: will display the users chosen option of either rock, paper, scissors, lizard or spock.

* Player Image choice will glow the rock, paper, scissors, lizard and spock.

* Your score: will increment by 1 when the user has won the game.

![image]()


### Computer area
* Computer choice: will display the computers chosen option of either rock, paper or scissors, lizard or spock.

* Computer score: will increment by 1 when the computer has won the game.

![image]()


### Start timer – button
* Button which will start the timer once it has been clicked

![image]()



### How to Play - the Modal
* Instructions on how to play the game

* Rules for how to win the game

* How quickly can you beat the computer explains that you can use the timer option if you want to see how quickly you can win.

![image]()


## Future Enhancements
* Game Modes - options to select how many rounds you would like to play like best of 5 rounds

* Difficulty - options to select the difficulty levels


## Testing
I have tested this game in Google Chrome, Mozilla Firefox, Safari and Microsoft Edge, as well as on my Xiaomi mobile.

* Clicked on Rock button and User Choice showed Rock and the computer generated choice was also shown.  The Result was shown correctly.

* Clicking on the Paper, Scissors, lizard and spock. button also showed the correct choice.

* The User Score and Computer Score were also updating correctly, adding 1 to User Score if the user won, adding 1 to Computer Score if the computer won, and not changing if it was a draw.

* I then tested the timer by clicking “Start timer”.

* The Time taken was correctly updating every second.

* I then tested the How to Play button and it correctly displayed the information in a pop up box, including an X to close the box.

### Bugs
* No Bugs were found.

### Validator Testing
* W3C Markup Validation

![html validator]()


* W3C CSS Validation

![css validator]()


* JS

![js validator]()


* Lighthouse

![lighthouse results]()


## Deployment
This website is hosted through GitHub and is deployed directly from the main branch. The deployed site will only update when new commits to the main branch have been pushed to GitHub.

### GitHub Pages
The project was deployed to GitHub Pages using the following steps:
1.	Log in to GitHub and locate the GitHub Repository
2.  Click on 'Settings'
3.  Scroll down and click on 'Pages' on the left-hand side menu.
4.  Select the 'Branch' 'master' and click on 'Save'.
5.  Allow GitHub a few minutes to deploy the website and then refresh the page.
6.  Website deployed.

## Credits

### Media
* Icons were taken from Font Awesome.
