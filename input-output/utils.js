function getMaxLineLength(texts) {
  let maxLength = 0;
  for (text of texts) {
    if (text.length > maxLength) {
      maxLength = text.length;
    }
  }
  return maxLength;
}

module.exports = { getMaxLineLength };
