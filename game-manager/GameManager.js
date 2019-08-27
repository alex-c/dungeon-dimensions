const gameInfo = require('../game/index.json');

function GameManager(io) {
  this.io = io;
}

GameManager.prototype.start = function() {
  this.io.drawBox(`Welcome to ${gameInfo.game}!`);
  this.displayMainMenu();
};

GameManager.prototype.displayMainMenu = function() {
  this.io.inquirer
    .prompt({
      type: 'list',
      name: 'manager-options',
      message: 'What would you like to do?',
      choices: ['Start a new game', 'Load a saved game', 'Exit'],
    })
    .then(answers => {
      if (answers['manager-options'] === 'Start a new game') {
        this.createNewGame();
      } else if (answers['manager-options'] === 'Load a saved game') {
        this.io.error(' > This feature has not been implemented yet!');
        this.displayMainMenu();
      } else {
        process.exit();
      }
    });
};

GameManager.prototype.createNewGame = function() {
  this.io.inquirer
    .prompt({
      type: 'input',
      name: 'character-name',
      message: "Enter your character's name:",
      validate: input => input !== '',
    })
    .then(answers => {
      this.io.log(` > Creating character ${this.io.chalk.blue(answers['character-name'])}!`);
    });
};

module.exports = GameManager;
