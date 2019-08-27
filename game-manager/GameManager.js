const gameInfo = require('../game/index.json');

function GameManger(io) {
  this.io = io;
}

GameManger.prototype.start = function() {
  this.io.drawBox(`Welcome to ${gameInfo.game}!`);

  this.io.inquirer
    .prompt({
      type: 'list',
      name: 'manager-options',
      message: 'What would you like to do?',
      choices: ['Start a new game', 'Load a saved game'],
    })
    .then(answers => {
      console.log(answers);
    });
};

module.exports = GameManger;
