# Bowling
This is a basic bowling game. When the user clicks the throw button a random number of pins between 1 and 10 are knocked down.  
## Game rules
A game consists of 10 frames.  
Each frame has 2 rolls.  
The player gets one additional roll for a spare in the last frame.  
The player gets two additional rolls for a strike in the last frame.  
A player scores the number of pins knocked down.  
If the player knocks down all 10 pins on the first roll it’s a strike. The player scores 10 plus the number of pins knocked down in the next 2 rolls.  
If the player knocks down all 10 pins in two rolls it’s a spare. The player scores 10 plus the number of pins knocked down in the next roll.  
## Prerequisites
Install Homebrew (this step is only for macOS)  
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Install node.js  
For macOS:  
```
brew install node
```
For Linux:  
```
sudo apt-get install nodejs
```
Install npm (this step is only for Linux)  
```
sudo apt-get install npm
```
## Installing
Go to directory  
```
cd bowling
```
Install dependencies  
```
npm install
```
## Running the tests
To run the tests  
```
npm test
```
## Running the app
To run the app  
```
npm start
```
The app will be available at http://localhost:3000/