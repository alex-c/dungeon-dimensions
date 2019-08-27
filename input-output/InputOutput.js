const inquirer = require('inquirer');
const chalk = require('chalk');

const BoxBuilder = require('./BoxBuilder');

function InputOutput() {
  this.chalk = chalk;
  this.inquirer = inquirer;
}

InputOutput.prototype.log = function(output) {
  console.log(output);
};

InputOutput.prototype.warn = function(output) {
  console.log(this.chalk.yellow(output));
};

InputOutput.prototype.error = function(output) {
  console.log(this.chalk.red(output));
};

InputOutput.prototype.buildBox = function() {
  return new BoxBuilder();
};

InputOutput.prototype.drawBox = function(texts) {
  const builder = new BoxBuilder();
  if (texts instanceof Array) {
    for (let i = 0; i < texts.length; i++) {
      builder.addText(texts[i]);
    }
  } else if (typeof texts === 'string') {
    builder.addText(texts);
  } else {
    builder.addText(texts.toString());
  }
  builder.draw();
};

module.exports = InputOutput;
