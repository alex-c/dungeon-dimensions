const InputOutput = require('./input-output/InputOutput');
const io = new InputOutput();

const GameManager = require('./game-manager/GameManager');
const manager = new GameManager(io);

manager.start();
