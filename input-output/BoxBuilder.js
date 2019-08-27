const { getMaxLineLength } = require('./utils');

function BoxBuilder() {
  this.terminalWidth = 80;
  this.contents = [];
}

BoxBuilder.prototype.addText = function(text) {
  this.contents.push(text);
  return this;
};

BoxBuilder.prototype.reset = function() {
  this.contents.length = 0;
  return this;
};

BoxBuilder.prototype.draw = function() {
  const maxContentLength = getMaxLineLength(this.contents);
  const maxLineLength = maxContentLength > this.terminalWidth - 4 ? this.terminalWidth - 4 : maxContentLength;
  const hBorder = '─'.repeat(maxLineLength + 2);
  console.log(`┌${hBorder}┐`);
  for (text of this.contents) {
    console.log(`│ ${text.padEnd(maxLineLength).substring(0, maxLineLength)} │`);
  }
  console.log(`└${hBorder}┘`);
};

module.exports = BoxBuilder;
